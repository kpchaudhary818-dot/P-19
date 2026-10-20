
import { useState } from "react";
import StudentList from "./components/StudentList";

const initialStudents = [
  { id: 1, name: "Rahul Sharma", course: "BCA" },
  { id: 2, name: "Priya Patel", course: "BBA" },
  { id: 3, name: "Amit Shah", course: "BSc IT" },
  { id: 4, name: "Neha Desai", course: "BCA" },
];

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [message, setMessage] = useState("");

  const handleDelete = (id) => {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.id !== id)
    );

    setMessage("Student deleted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-3 text-center text-3xl font-bold text-blue-700">
          Student Management
        </h1>

        <p className="mb-8 text-center text-gray-600">
          View and manage student records
        </p>

        {message && (
          <div
            role="status"
            className="mb-5 rounded-lg bg-green-100 p-3 text-center font-medium text-green-700"
          >
            {message}
          </div>
        )}

        <StudentList
          students={students}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;
