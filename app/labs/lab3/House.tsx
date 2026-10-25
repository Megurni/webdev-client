export const house = {
  street: "123 Main Street", city: "Boston", yearBuilt: 1998,
  bathrooms: { full: 2, half: 1 }, owners: ["Alice", "Bob"],
  garage: undefined as undefined | { cars: number },
};
export default function House() {
  return <section id="wd-house"><h4>House</h4>
    <pre>{JSON.stringify(house, null, 2)}</pre>
    <p>yearBuilt = {house.yearBuilt}</p>
    <h5>Bathrooms</h5><p>{house.bathrooms.full} full, {house.bathrooms.half} half</p>
    <h5>Owners</h5><p>{house.owners.join(", ")}</p>
    <p>house.garage.cars = {house.garage?.cars ?? 0}</p>
  </section>;
}
