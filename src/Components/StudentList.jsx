
function StudentList({ students, onDelete }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-xl font-bold text-gray-800">
        Student List
      </h2>

      {students.length === 0 ? (
        <p className="rounded-lg bg-yellow-50 p-4 text-center text-gray-600">
          No students available.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Course</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => (
                <tr
                  key={student.id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="px-4 py-3">{student.id}</td>
                  <td className="px-4 py-3 font-medium text-gray-800">
                    {student.name}
                  </td>
                  <td className="px-4 py-3 text-gray-600">
                    {student.course}
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => onDelete(student.id)}
                      className="rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <p className="mt-4 text-sm text-gray-500">
        Total students: {students.length}
      </p>
    </div>
  );
}

export default StudentList;
