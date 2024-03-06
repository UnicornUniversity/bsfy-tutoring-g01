import Icon from "@mdi/react";
import {
  mdiAccountCheckOutline,
  mdiAccountAlertOutline,
  mdiAccountQuestionOutline,
} from "@mdi/js";

function EventCard({ event, userList }) {
  return (
    <div className="card">
      <div class="card-header text-bg-info">{`${event.date} (${event.name})`}</div>
      <div className="card-body">
        <div className="card-text">
          <Icon path={mdiAccountCheckOutline} size={1} color={"green"} />
          {event.willAttend.length} /
          <Icon path={mdiAccountAlertOutline} size={1} color={"red"} />
          {event.willNotAttend.length} /
          <Icon path={mdiAccountQuestionOutline} size={1} color={"orange"} />
          {userList.length -
            event.willAttend.length -
            event.willNotAttend.length}
        </div>
      </div>
    </div>
  );
}

export default EventCard;
