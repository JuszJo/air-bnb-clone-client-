const prod = true;

export default {
    root: prod ? "https://jobnb-server.onrender.com" : "http://localhost:3000",
    auth: prod ? "https://jobnb-server.onrender.com/auth" : "http://localhost:3000/auth",
    listing: prod ? "https://jobnb-server.onrender.com/listing" : "http://localhost:3000/listing",
    login: prod ? "https://jobnb-server.onrender.com/login" : "http://localhost:3000/login",
    signup: prod ? "https://jobnb-server.onrender.com/signup" : "http://localhost:3000/signup",
    upload: prod ? "https://jobnb-server.onrender.com/upload" : "http://localhost:3000/upload",
    delete: prod ? "https://jobnb-server.onrender.com/delete" : "http://localhost:3000/delete",
}