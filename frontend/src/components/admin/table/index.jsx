export default function TableCard({ title, columns, data, renderAction }) {
  return (
    <div
      className="bg-white rounded-4 shadow-sm p-4"
      style={{ marginTop: "25px" }}
    >
      <h5 className="fw-bold text-primary mb-4">{title}</h5>

      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead className="table-light">
            <tr>
              {columns.map((col, idx) => (
                <th key={idx} scope="col">
                  {col}
                </th>
              ))}
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((row, idx) => (
                <tr key={idx}>
                  {columns.map((col, i) => (
                    <td key={i}>{row[col.toLowerCase()]}</td>
                  ))}
                  <td>{renderAction ? renderAction(row) : null}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length + 1}
                  className="text-center text-muted"
                >
                  Tidak ada data.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
