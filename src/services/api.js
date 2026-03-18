let port = "8080"
const URL_BASE = "localhost:" + port + "/"

export let end_points = {
    users: URL_BASE + "users/", /* localhost:8080/users/ */
    merchants: URL_BASE + "merchants/",
    expenses: URL_BASE + "expenses/",
    payment_methods: URL_BASE + "payment_methods/",
    category: URL_BASE + "category/"
}