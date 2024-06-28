import React from "react";
import Layout from "../../../../../components/layout/Layout";

const QrCode = () => {
    const QrCode = `
import qrcode

# Data to be encoded
data = "https://yourwebsite.com"

# Create QR code instance
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)

# Add data to the QR code
qr.add_data(data)
qr.make(fit=True)

# Create an image from the QR code instance
img = qr.make_image(fill_color="black", back_color="white")

# Save the image
img.save("qrcode.png")
  `;
    
const QrcodeUpi = `
import qrcode

# UPI details
upi_id = "Your_Upi@Bank"
payee_name = "Name"
transaction_note = "Payment for services"

# UPI URL format
upi_url = f"upi://pay?pa={upi_id}&pn={payee_name}&tn={transaction_note}"

# Create QR code instance
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)

# Add data to the QR code
qr.add_data(upi_url)
qr.make(fit=True)

# Create an image from the QR code instance
img = qr.make_image(fill_color="black", back_color="white")

# Save the image
img.save("upi_qrcode.png")
  `;
    
     const QrCodeUPISOFTWAREAMOUNT = `
import tkinter as tk
from tkinter import messagebox
import qrcode
from PIL import Image, ImageTk

def generate_upi_qr():
    amount = entry_amount.get()
    if amount:
        upi_data = f"upi://pay?pa=your_vpa@bank&pn=YourName&am={amount}&cu=INR"
        qr = qrcode.QRCode(
            version=1,
            error_correction=qrcode.constants.ERROR_CORRECT_L,
            box_size=10,
            border=4,
        )
        qr.add_data(upi_data)
        qr.make(fit=True)
        img = qr.make_image(fill='black', back_color='white')
        img.save("upi_qrcode.png")
        
        img = Image.open("upi_qrcode.png")
        new_img = img.resize((200, 200))  # Call resize on the img object
        img = ImageTk.PhotoImage(new_img)
        
        qr_label.config(image=img)
        qr_label.image = img
    else:
        messagebox.showwarning("Input Error", "Please enter an amount to generate UPI QR code")

app = tk.Tk()
app.title("UPI QR Code Generator")

tk.Label(app, text="Enter Amount:").pack(pady=10)
entry_amount = tk.Entry(app, width=40)
entry_amount.pack(pady=5)

generate_button = tk.Button(app, text="Generate UPI QR Code", command=generate_upi_qr)
generate_button.pack(pady=20)

qr_label = tk.Label(app)
qr_label.pack(pady=10)

app.mainloop()
  `;
     const pythonCode = `
import tkinter as tk
from tkinter import messagebox
import qrcode
from PIL import Image, ImageTk

def generate_upi_qr():
    upi_id = entry_upi_id.get()
    name = entry_name.get()
    amount = entry_amount.get()
    
    if upi_id and name and amount:
        upi_data = f"upi://pay?pa={upi_id}&pn={name}&am={amount}&cu=INR"
        qr = qrcode.QRCode(
            version=1,
            error_correction=qrcode.constants.ERROR_CORRECT_L,
            box_size=10,
            border=4,
        )
        qr.add_data(upi_data)
        qr.make(fit=True)
        img = qr.make_image(fill='black', back_color='white')
        img.save("upi_qrcode.png")
        
        img = Image.open("upi_qrcode.png")
        new_img = img.resize((200, 200))
        img = ImageTk.PhotoImage(new_img)
        
        qr_label.config(image=img)
        qr_label.image = img
    else:
        messagebox.showwarning("Input Error", "Please enter all payment details to generate UPI QR code")

app = tk.Tk()
app.title("UPI QR Code Generator")

tk.Label(app, text="Enter UPI ID:").pack(pady=10)
entry_upi_id = tk.Entry(app, width=40)
entry_upi_id.pack(pady=5)

tk.Label(app, text="Enter Name:").pack(pady=10)
entry_name = tk.Entry(app, width=40)
entry_name.pack(pady=5)

tk.Label(app, text="Enter Amount:").pack(pady=10)
entry_amount = tk.Entry(app, width=40)
entry_amount.pack(pady=5)

generate_button = tk.Button(app, text="Generate UPI QR Code", command=generate_upi_qr)
generate_button.pack(pady=20)

qr_label = tk.Label(app)
qr_label.pack(pady=10)

app.mainloop()
    `;

  return (
    <Layout>
      <div className="text-white m-8">
        <div className="mb-4">
          <h1 className="text-2xl">Qr Code</h1>
          <h2>Befor past this code install Librery in terminal </h2>
          <p className="mt-2 mb-4 p-2 bg-black border-2 border-white rounded-xl ">
            pip install qrcode
          </p>

          <pre className="overflow-x-auto bg-black p-4 border-2 border-white rounded-xl">
            {QrCode}
          </pre>
        </div>
        <hr />
        <div className="mb-4 mt-4">
          <h1 className="text-2xl">Upi Qr Code</h1>
          <h2>Befor past this code install Librery in terminal </h2>
          <p className="mt-2 mb-4 p-2 bg-black border-2 border-white rounded-xl ">
            pip install qrcode
          </p>
          <pre className="overflow-x-auto bg-black p-4 border-2 border-white rounded-xl">
            {QrcodeUpi}
          </pre>
        </div>
        <hr />
        <div className="mt-4">
          <h1 className="text-2xl">Upi Qr Code With Software</h1>
          <h2>Befor past this code install Librery in terminal </h2>
          <p className="mt-2 mb-4 p-2 bg-black border-2 border-white rounded-xl ">
            pip install tk <br /> pip install pillow <br />
            pip install qrcode
          </p>
          <h2>Upi Software Qr Code for Only Amount Enter</h2>
          <pre className="overflow-x-auto bg-black p-4 border-2 border-white rounded-xl">
            {QrCodeUPISOFTWAREAMOUNT}
          </pre>
          <br />
          <br />
          <h2>Upi Software Qr Code for All Payment Detail Enter</h2>
          <pre className="overflow-x-auto bg-black p-4 border-2 border-white rounded-xl">
            {pythonCode}
          </pre>
        </div>
      </div>
    </Layout>
  );
};

export default QrCode;
