import React from "react";
import EventForm from "./EventForm";
import Header from "./Header";

export default function CreateEvent() {
    return (
        <div className="flex bg-gray-100 font-sans">
            <div className="flex-1   ">
                <Header/>
                <EventForm/>
            </div>
        </div>
    );
}