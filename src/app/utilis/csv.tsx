// utils/exportCsv.ts

export function downloadUsersCSV(users: { name: string; email: string }[]) {
  const headers = ["Name", "Email"];
  const rows = users.map((user) => [user.name, user.email]);

  const csvContent =
    "data:text/csv;charset=utf-8," +
    [headers, ...rows].map((row) => row.join(",")).join("\n");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "users.csv");
  document.body.appendChild(link); // For Firefox
  link.click();
  link.remove();
}
