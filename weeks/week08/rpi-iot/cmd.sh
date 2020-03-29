# 1. edit crontab
sudo crontab -e

# 2. in the opened crontab input the following lines
0 */2 * * * sh [local_repository_path]/iot.sh
# then exit the editing environment by Crtl+X and then `Y`

# 3. restart the cron service to activiate the change
sudo service cron restart

# 4. check the log
sudo tail -f /var/log/syslog | grep CRON

# commonly used commands
cd
ls
pwd
history
