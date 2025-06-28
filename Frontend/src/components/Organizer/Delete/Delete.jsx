// import EventTable from "./EventTable";

import EventsTable from "./EventTable";
import Header from "./Header";

export default function Delete() {
  return (
    <div className="flex bg-gray-100 font-sans">
      <div className="flex-1 ">
        <Header />
        <EventsTable />
      </div>
    </div>
  );
}
