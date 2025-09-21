<h1>🛠️ Tire Measurement Cleaning & Extraction Pipeline</h1>

<h2>📌 Project Overview</h2>

<p>This project automates the cleaning and extraction of tire measurements from product descriptions stored in Excel files.
The main goal is to standardize inconsistent tire size formats—such as
<strong>155-70-13</strong> or <strong>33-12.5R-18</strong> into the correct industry standards like
<strong>###/##R##</strong> (e.g., 155/70R13) or <strong>##x##.#R##</strong> (e.g., 33x12.5R18),
ensuring clean and structured data for downstream applications.</p>

<h2>⚙️ Key Features</h2>

<p><Strong>Automated Data Cleaning:</Strong>
Extracts and normalizes tire size measurements from raw product descriptions using JavaScript.</p>

<p><Strong>Cloud Integration:</Strong>
Seamless connection with Google Drive for both input and output files.</p>

<p><Strong>Real-Time Processing:</Strong>
Uses an n8n listener to trigger the cleaning pipeline whenever a new Excel file is uploaded.</p>

<p><Strong>Structured Output:</Strong>
The processed dataset is returned with four clean, ready-to-use columns:</p>
<h5 align="center"> New Expecped Format<br>
  Product | Code | Price | Measurement.</h5>

<div align="center">
  <img src="Sample Data Before Cleaning.png" width="300px">
  <img src="Sample Data After Cleaning.png" width="350px">
</div>

<h2>🔄 Data Pipeline</h2>

<p><Strong>Input Upload:</Strong>
The client uploads a raw Excel file containing product information to a shared Google Drive folder.</p>
<p><Strong>n8n Listener Trigger:</Strong>
An n8n workflow detects the new file and initiates the cleaning process automatically.</p>

<p><Strong>Data Cleaning & Extraction:</Strong>
Tire measurements are extracted using JavaScript code and a regex.</p>

<p><Strong>Supported transformations include:</Strong><br>
Hyphenated patterns like 155-70-13 → 155/70R13<br>
Hyphenated off-road patterns like 33-12.5R-18 → 33x12.5R18</p>

<p><Strong>Output Delivery:</Strong>
The cleaned file is uploaded to a separate Google Drive folder for the chatbot to access and use in customer responses.</p>

<div align="center">
  <img src="Workflow Process Data Cleansing n8n.png" width="500px">
</div>

<h2>🧩 Tech Stack</h2>

<p><Strong>Programming:</Strong>
JavaScript language (Regex for pattern detection & data transformation)</p>

<p><Strong>Automation:</Strong>
n8n (event listener and pipeline orchestration)</p>

<p><Strong>Cloud Storage:</Strong>
Google Drive (input/output file management)</p>

<p><Strong>Data Source:</Strong>
Excel files containing product descriptions</p>

<div align="center">
  <img src="Data Cleansing Code Performance n8n.png" width="500px">
</div>

<h2>🚀 Results</h2>

Significant time savings by eliminating manual data cleaning.
Reliable and uniform measurement formats ready for chatbot integration.
Scalable pipeline capable of handling frequent updates with zero manual intervention.
