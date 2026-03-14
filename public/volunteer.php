<?php
/**
 * Volunteer Form Handler for Hostinger
 * This script receives JSON data from the React frontend and saves it to a CSV file.
 */

// Allow cross-origin requests if needed (optional for same-domain)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the JSON data from the request body
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if ($data) {
        $fullName = $data['fullName'] ?? 'N/A';
        $phone = $data['phone'] ?? 'N/A';
        $constituency = $data['constituency'] ?? 'N/A';
        $date = date('Y-m-d H:i:s');

        // Prepare the CSV line
        $csvLine = [$date, $fullName, $phone, $constituency];

        // Path to the CSV file
        $filename = 'volunteers.csv';

        // Check if file exists to add header
        $fileExisted = file_exists($filename);

        $file = fopen($filename, 'a');
        
        if (!$fileExisted) {
            fputcsv($file, ['Date', 'Full Name', 'Phone', 'Constituency']);
        }

        fputcsv($file, $csvLine);
        fclose($file);

        // Optional: Send an email notification
        // $to = "amaaf.co@gmail.com";
        // $subject = "New Volunteer Registration: $fullName";
        // $message = "Name: $fullName\nPhone: $phone\nConstituency: $constituency";
        // mail($to, $subject, $message);

        http_response_code(200);
        echo json_encode(["message" => "Success"]);
    } else {
        http_response_code(400);
        echo json_encode(["message" => "Invalid data"]);
    }
} else {
    http_response_code(405);
    echo json_encode(["message" => "Method not allowed"]);
}
?>
