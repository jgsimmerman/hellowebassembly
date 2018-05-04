extern crate hello_world;

use hello_world::{generate_greeting, generate_custom_greeting};

fn main() {
    println!("{}", generate_greeting());
    println!("{}", generate_custom_greeting("Robert"));
}
