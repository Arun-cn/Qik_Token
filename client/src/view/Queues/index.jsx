import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQueues } from "../../features/queue/queue.Service";
import React from "react";
import Card from "../../Components/queueCard";

function QueueList() {
  const dispatch = useDispatch();
  const queues = useSelector((state) => state.queues.queues);

  useEffect(() => {
    dispatch(fetchQueues());
  }, [dispatch]);

  return (
    <div g-2>
      {queues && queues.length > 0 ? (
        queues.map((queue) => <Card title={queue.queue} />)
      ) : (
        <div>Noting to Show </div>
      )}
    </div>
  );
}

export default QueueList;
