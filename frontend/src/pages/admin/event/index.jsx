import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { id } from "date-fns/locale";

const locales = {
  "id-ID": id,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

const EventCalendar = () => {
  const [events, setEvents] = useState([
    {
      title: "Festival Musik Indie",
      start: new Date("2025-06-15T18:00:00"),
      end: new Date("2025-06-15T21:00:00"),
    },
    {
      title: "Pernikahan Adat Bali",
      start: new Date("2025-06-22T10:00:00"),
      end: new Date("2025-06-22T14:00:00"),
    },
  ]);

  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
  });

  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleAddEvent = (e) => {
    e.preventDefault();
    const newEv = {
      title: newEvent.title,
      start: new Date(newEvent.start),
      end: new Date(newEvent.end),
    };
    setEvents([...events, newEv]);
    setNewEvent({ title: "", start: "", end: "" });
  };

  const handleDeleteEvent = () => {
    setEvents(events.filter((event) => event !== selectedEvent));
    setSelectedEvent(null);
  };

  const handleEditEvent = () => {
    setNewEvent({
      title: selectedEvent.title,
      start: format(selectedEvent.start, "yyyy-MM-dd'T'HH:mm"),
      end: format(selectedEvent.end, "yyyy-MM-dd'T'HH:mm"),
    });
    setEvents(events.filter((event) => event !== selectedEvent));
    setSelectedEvent(null);
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4 text-primary fw-bold">Kalender Event</h3>

      <form className="mb-4" onSubmit={handleAddEvent}>
        <div className="row g-3">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Judul Event"
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              required
            />
          </div>
          <div className="col-md-3">
            <input
              type="datetime-local"
              className="form-control"
              value={newEvent.start}
              onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })}
              required
            />
          </div>
          <div className="col-md-3">
            <input
              type="datetime-local"
              className="form-control"
              value={newEvent.end}
              onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
              required
            />
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-success w-100">
              Tambah Event
            </button>
          </div>
        </div>
      </form>

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        onSelectEvent={(event) => setSelectedEvent(event)}
      />

      {selectedEvent && (
        <div
          className="modal d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Detail Event</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedEvent(null)}
                ></button>
              </div>
              <div className="modal-body">
                <p><strong>Judul:</strong> {selectedEvent.title}</p>
                <p><strong>Mulai:</strong> {format(selectedEvent.start, "PPpp")}</p>
                <p><strong>Selesai:</strong> {format(selectedEvent.end, "PPpp")}</p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-warning"
                  onClick={handleEditEvent}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={handleDeleteEvent}
                >
                  Hapus
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => setSelectedEvent(null)}
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCalendar;
