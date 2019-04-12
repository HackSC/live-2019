# HackSC Live Dashboard 2019

This is the live dashboard for HackSC 2019! This website contains a live schedule, helpful links, an API directory, and more. This will be a one-stop shop for hackers to be engaged with the hackathon and be informed as to what's happening.

## Updating Site Content

Site content like announcements + the live schedule can be updated (somewhat) on the fly. The announcement and schedule components will pull data from a hosted CSV file that you can update here. To do so, perform the following:

### Updating the Schedule

* First, `git clone` this repository on your computer
* Open up `static/schedule.csv` using a spreadsheet editor like Excel or Numbers
* Edit content and make sure to export to a CSV format (this is important)
* Open up `static/schedule.csv` with a text editor to verify things look good
* `git push` and `git commit` the updated `schedule.csv` to master. Once it's pushed, the schedule will be live for the world to see :)

The above steps are the same for announcements but with the `announcements.csv` file. Note: the most recent announcements should be added to the end. I have programmed the announcements component to read from the bottom up to ensure the latest announcement is always the first announcement rendered.
