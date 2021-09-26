echo "Waiting for postgres..."
i=0

until [ $i -gt 10 ]
do
  /usr/bin/timeout 5 bash -c 'until printf "" 2>>/dev/null >>/dev/tcp/$0/$1; do sleep 1; done' db 5432
  echo "Postgres seen! Waiting for it to stabilize!"
  sleep 1
  ((i=i+1))
done

echo "We have reached postgres on port 5432! Resuming!"