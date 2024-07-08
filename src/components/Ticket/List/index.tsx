import { dataWebsite } from "../../../constants/data";
import DayItem from "./DayItem";

export default function List() {
  return (
    <section
      id="session_0"
      className="sessions__list__item ng-scope ng-isolate-scope"
    >
      {dataWebsite.map((item) => (
        <DayItem key={item.title} day={item} />
      ))}
    </section>
  );
}
