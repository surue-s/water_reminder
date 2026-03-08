use rusqlite::{Connection, Result};
use std::path::PathBuf;

//for opening or creating SQLite database file on the device.

pub fn get_db_path() -> PathBuf{
    let mut path = dirs::data_dir()
        .unwrap_or_else(|| PathBuf::from("."));
    path.push("water_reminder");
    std::fs::create_dir_all(&path).ok();
    path.push("water.db");
    path
}