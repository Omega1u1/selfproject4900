function exportToCSV() {
    // 1. Get data to export (e.g., from your technician table)
    const
   tableData = getTableData(); // Replace with your data retrieval logic
  
    // 2. Convert data to CSV format
    const csvContent = convertToCSV(tableData);
  
    // 3. Create a download link
    const downloadLink = document.createElement('a');
    downloadLink.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvContent);
    downloadLink.target = '_blank';
    downloadLink.download = 'ticket_analysis.csv';
  
    // 4. Trigger download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }
  
  // Helper function to convert data to CSV format
  function convertToCSV(data) {
    // ... (Implementation to convert your data array to CSV string)
  }
  
  // Helper function to get data from your table (replace with your logic)
  function getTableData() {
    // ... (Implementation to extract data from your technician table)
  }
  