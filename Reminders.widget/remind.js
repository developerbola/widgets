ObjC.import("EventKit")
ObjC.import("Foundation")

const store = $.EKEventStore.alloc.init
let granted = false
let errDesc = null

store.requestAccessToEntityTypeCompletion($.EKEntityTypeReminder, (g, e) => {
  granted = g
  if (e && e.localizedDescription) errDesc = e.localizedDescription.js
})

const rl = $.NSRunLoop.currentRunLoop
const start = Date.now()

while (!granted && !errDesc) {
  rl.runUntilDate($.NSDate.dateWithTimeIntervalSinceNow(0.2))
  if (Date.now() - start > 20000) break
}

if (granted) {
  const cals = store.calendarsForEntityType($.EKEntityTypeReminder)
  const predicate = store.predicateForRemindersInCalendars(cals)

  const fmt = $.NSDateFormatter.alloc.init
  fmt.setDateFormat("EEEE, d MMMM yyyy 'at' HH:mm:ss")

  let fetchDone = false
  let fetchTimeout = false
  let reminderOutput = ""

  store.fetchRemindersMatchingPredicateCompletion(predicate, (reminders) => {
    if (reminders && reminders.count > 0) {
      const out = []
      for (let i = 0; i < reminders.count; i++) {
        const r = reminders.objectAtIndex(i)
        if (r.completed) continue
        out.push("LIST: " + (r.calendar.title.js || "Unknown"))
        out.push("Task: " + (r.title.js || "Untitled"))
        const dc = r.dueDateComponents
        if (dc) {
          const cal = $.NSCalendar.currentCalendar
          const date = cal.dateFromComponents(dc)
          if (date) out.push("Due: " + fmt.stringFromDate(date).js)
          else out.push("Due: missing value")
        } else {
          out.push("Due: missing value")
        }
        out.push("Priority: " + r.priority)
        out.push("Notes: " + (r.notes && r.notes.js ? r.notes.js : "none"))
        out.push("")
      }
      reminderOutput = out.join("\n")
    }
    fetchDone = true
  })

  const deadline = Date.now() + 20000
  while (!fetchDone) {
    rl.runUntilDate($.NSDate.dateWithTimeIntervalSinceNow(0.2))
    if (Date.now() > deadline) {
      fetchTimeout = true
      break
    }
  }

  if (fetchTimeout) {
    console.error("Timeout fetching reminders")
  } else if (reminderOutput) {
    console.log(reminderOutput)
  }
} else {
  console.error(errDesc || "Access denied")
}
