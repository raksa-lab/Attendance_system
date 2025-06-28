import React from "react";
import Header from "./Header";
import OverviewCards from "./OverviewCards";
import RevenueSection from "./RevenueSection";
import EventsTable from "./EventTable";

export default function Overview() {
    return (
        <div className="flex bg-gray-100 font-sans">
            <div className="flex-1 ">
                <Header/>
                <OverviewCards/>
                <RevenueSection/>
                <EventsTable/>
            </div>
        </div>
    );
}