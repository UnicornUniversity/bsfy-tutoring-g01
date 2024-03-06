import { useState } from "react";
import EventCard from "./EventCard";
import Icon from "@mdi/react";
import { mdiVolleyball, mdiFilterOffOutline, mdiFilterOutline } from "@mdi/js";

function EventList() {
  const [showFutureOnly, setShowFutureOnly] = useState(true);

  const userList = [
    {
      id: "aragorn",
      name: "Aragorn",
    },
    {
      id: "legolas",
      name: "Legolas",
    },
    {
      id: "gimli",
      name: "Gimli",
    },
  ];

  const eventList = [
    {
      id: "0",
      date: "2024-02-28",
      name: "Volleyball",
      willAttend: ["aragorn"],
      willNotAttend: ["gimli"],
    },
    {
      id: "a",
      date: "2024-03-06",
      name: "Volleyball",
      willAttend: ["aragorn"],
      willNotAttend: ["gimli"],
    },
    {
      id: "b",
      date: "2024-03-13",
      name: "Volleyball",
      willAttend: ["aragorn"],
      willNotAttend: [],
    },
    {
      id: "c",
      date: "2024-03-20",
      name: "Volleyball",
      willAttend: [],
      willNotAttend: [],
    },
  ];

  const filteredEventList = showFutureOnly
    ? eventList.filter((event) => new Date(event.date) > new Date())
    : eventList;

  return (
    <div>
      <h1>Event List</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setShowFutureOnly((current) => !current)}
      >
        {showFutureOnly ? (
          <Icon path={mdiFilterOffOutline} size={1} color="white" />
        ) : (
          <Icon path={mdiFilterOutline} size={1} color="white" />
        )}{" "}
        {showFutureOnly ? "Show All" : "Show Future Only"}
      </button>
      <Icon
        path={mdiVolleyball}
        title="Volleyball"
        size={2}
        horizontal
        vertical
        rotate={90}
        color="blue"
        spin
      />
      {filteredEventList.map((event) => {
        return <EventCard key={event.id} event={event} userList={userList} />;
      })}
    </div>
  );
}

export default EventList;
