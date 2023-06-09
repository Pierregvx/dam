#![cfg_attr(not(feature = "std"), no_std)]
#![feature(min_specialization)]
        
#[openbrush::contract]
pub mod my_psp34 {
    
    // imports from openbrush
	use openbrush::traits::String;
	use openbrush::traits::Storage;
	use openbrush::contracts::psp34::extensions::mintable::*;
	use openbrush::contracts::psp34::extensions::enumerable::*;
	use openbrush::contracts::psp34::extensions::metadata::*;

    #[ink(storage)]
    #[derive(Default, Storage)]
    pub struct Post {
    	#[storage_field]
		psp34: psp34::Data<Balances>,
		#[storage_field]
		metadata: metadata::Data,
    }
    
    // Section contains default implementation without any modifications
	impl PSP34 for Post {}
	impl PSP34Mintable for Post {}
	impl PSP34Enumerable for Post {}
	impl PSP34Metadata for Post {}
     
    impl Post {
        #[ink(constructor)]
        pub fn new() -> Self {
            let mut _instance = Self::default();
			_instance._mint_to(_instance.env().caller(), Id::U8(1)).expect("Can mint");
			let collection_id = _instance.collection_id();
			_instance._set_attribute(collection_id.clone(), String::from("name"), String::from("MyPSP34"));
			_instance._set_attribute(collection_id, String::from("symbol"), String::from("MPSP"));
			_instance
        }
    }
}