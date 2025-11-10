type UserRole = "admin" | "user";


const getDashboard = (role: UserRole) => {
    if (role === "admin") {
        return "admin dashboard"
    }
    else if (role === "user") {
        return "user dashboard"
    }
    else {
        return "guest dashboard"
    }

}

getDashboard("admin")



type Employee = {
    id: string;
    name: string;
    phone: string
}

type Manager = {
    designation: string;
    teamSize: number;
}

type EmployeeManager = Employee & Manager;


const ArmanHossain: EmployeeManager = {
    id: "123",
    name: "arman Hossain ",
    phone: "012345",
    designation: "manager",
    teamSize: 5
}