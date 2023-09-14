export const checkIfSuperAdmin = (privilege) => {
    return privilege === "SuperAdmin";
}

export const checkIfAdmin = (privilege) => {
    return privilege === "Admin";
}

export const checkIfMember = (privilege) => {
    return privilege === "Member";
}