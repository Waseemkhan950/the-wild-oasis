import supabase from "./supabase";

export async function getCabins() {
	const { data, error } = await supabase.from("Cabins").select("*");
	if (error) {
		console.error(error);
		throw new Error("Cabins could not be fetched");
	}
	return data;
}
export async function deleteCabin(id) {
	const { data, error } = await supabase.from("Cabins").delete().eq("id", id);
	if (error) {
		console.error(error);
		throw new Error("Cabin could not be deleted");
	}
	return data;
}
export async function addCabin(cabin) {
	const { data, error } = await supabase
		.from("Cabins")
		.insert([cabin])
		.select();
	if (error) {
		console.error(error);
		throw new Error("Cabin could not be created");
	}
	return data;
}
