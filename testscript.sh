HOST='w012bb2a.kasserver.com'
USER='f01272de'
PASSWD='SharedGitPass2020'


#spc $USER@$PASSWD:$HOST

npm run build
ftp -n $HOST <<END_SCRIPT
quote USER $USER
quote PASS $PASSWD
mdelete -r *
mput build/*
quit
END_SCRIPT
#user USER=f01272de PASS=SharedGitPass2020

