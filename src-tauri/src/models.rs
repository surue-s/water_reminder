//use to bring items from another module
use serde::{Deserialize, Serialize};

//derive - implement common traits for types. 
//struct lets you package together values that are related
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct User {
    pub id: String,
    pub username: String,
    pub password_hash: String,
    pub created_at: String, 
}
//serialize/deserialize - convert struct to JSON
//debug- print struct with {:?} to debug
//Clone- to make copies of the value
#[derive(Debug, Serialize, Clone)]
pub struct WaterLog {
    
    pub id: String,
    pub user_id: String, 
    pub amount_ml: i32,
    pub logged_at: String,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Settings {
    pub user_id: String, 
}
//sends this to the js frontend

#[derive(Debug, Serialize, Deserialize)]
pub struct PublicUser {
    pub id: String,
    pub username: String,
}