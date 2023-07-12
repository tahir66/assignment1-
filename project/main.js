/*Question No 1*/
/*--------------------------------------------*/
//Installation
/*--------------------------------------------*/
/*Question  No 2*/
/*--------------------------------------------*/
var subject = "Hello Eric, would you like to learn some Python today?";
console.log(subject);
/*--------------------------------------------*/
/*Question  No 3*/
/*--------------------------------------------*/
var Person_Name = 'Muhammad  Ali';
console.log(Person_Name.toLowerCase());
console.log(Person_Name.toUpperCase());
console.log(Person_Name.charAt(0).toUpperCase() + Person_Name.slice(1).toLowerCase());
/*--------------------------------------------*/
/*Question  No 4*/
/*--------------------------------------------*/
var Quote = 'Franklin D. Roosevelt once said, "The only thing we have to fear is fear itself."';
console.log(Quote);
/*--------------------------------------------*/
/*Question  No 5*/
/*--------------------------------------------*/
var famous_person = 'Franklin D. Roosevelt';
var Quotes = ' once said, "The only thing we have to fear is fear itself."';
console.log(famous_person + Quotes);
/*--------------------------------------------*/
/*Question  No 6*/
/*--------------------------------------------*/
var white_space = '\t Muhammad Ali \n';
console.log(white_space);
var striping = white_space.trim();
console.log(striping);
/*--------------------------------------------*/
/*Question  No 7*/
/*--------------------------------------------*/
console.log('Addition = ', 5 + 3);
console.log('Addition = ', 4 + 4);
console.log('Subtraction = ', 10 - 2);
console.log('Subtraction = ', 16 - 8);
console.log('Multiplication = ', 4 * 2);
console.log('Multiplication = ', 2 * 4);
console.log('Division = ', 16 / 2);
console.log('Division = ', 64 / 8);
/*--------------------------------------------*/
/*Question  No 8*/
/*--------------------------------------------*/
console.log('Addition = ', 4 + 4);
console.log('Subtraction = ', 10 - 2);
console.log('Multiplication = ', 4 * 2);
console.log('Division = ', 16 / 2);
/*--------------------------------------------*/
/*Question  No 9*/
/*--------------------------------------------*/
var numbers = 31;
console.log('My favorite number is', numbers);
/*--------------------------------------------*/
/*Question  No 10*/
/*--------------------------------------------*/
// Program 1
//Author : Fahad 
// Date : 06- July -2023
// This Program is print my favorinte number
// let numbers : number = 31;
console.log('My favorite number is', numbers);
// Program 2
//Author : Fahad 
// Date : 06- July -2023
// This Program is perform Arithmetic operation
console.log('Addition = ', 4 + 4);
console.log('Subtraction = ', 10 - 2);
console.log('Multiplication = ', 4 * 2);
console.log('Division = ', 16 / 2);
/*--------------------------------------------*/
/*Question  No 11*/
/*--------------------------------------------*/
var names = ["Fahad", "Zain", "Tahir", "Faysal"];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log(name_1);
}
/*--------------------------------------------*/
/*Question  No 12*/
/*--------------------------------------------*/
// let names : string[] = ["Fahad","Zain","Tahir","Faysal"];
for (var _a = 0, names_2 = names; _a < names_2.length; _a++) {
    var name_2 = names_2[_a];
    console.log('Hello', name_2, 'This is a personalized message for you.');
}
/*--------------------------------------------*/
/*Question  No 13*/
/*--------------------------------------------*/
var motorcycle = ["Honda", "Suzuki", "Express", "Super Star", "Unique"];
for (var _b = 0, motorcycle_1 = motorcycle; _b < motorcycle_1.length; _b++) {
    var motor = motorcycle_1[_b];
    console.log('I would like to own a', motor);
}
/*--------------------------------------------*/
/*Question  No 14*/
/*--------------------------------------------*/
var Guest_list = ["Zaid", "Saad", "Mahad"];
for (var _c = 0, Guest_list_1 = Guest_list; _c < Guest_list_1.length; _c++) {
    var guest = Guest_list_1[_c];
    console.log('Dear', guest, 'you are cordially invited to dinner. Please join us for an evening of engaging conversation and delightful company.');
}
/*--------------------------------------------*/
/*Question  No 15*/
/*--------------------------------------------*/
// let Guest_list : string[] = ["Zaid","Saad","Mahad"]
var guestNotAvail = "Saad";
console.log(guestNotAvail, 'is unable to attend the dinner');
var new_Guest = "Mahid";
var unableGuset = Guest_list.indexOf(guestNotAvail);
if (unableGuset !== -1) {
    Guest_list.splice(unableGuset, 1, new_Guest);
}
for (var _d = 0, Guest_list_2 = Guest_list; _d < Guest_list_2.length; _d++) {
    var guest = Guest_list_2[_d];
    console.log('Dear', guest, 'you are cordially invited to dinner. Please join us for an evening of engaging conversation and delightful company.');
}
/*--------------------------------------------*/
/*Question  No 16*/
/*--------------------------------------------*/
var Guest_list1 = ["Zaid", "Mahid", "Mahad"];
Guest_list1.unshift('Waqar'); //print on 0 index
Guest_list1.splice(Math.floor(Guest_list.length / 2), 0, "Zain"); // print on 2 index 
//Append is not use on TypeScript
Guest_list.push("Danish"); //print on last index
for (var _e = 0, Guest_list_3 = Guest_list; _e < Guest_list_3.length; _e++) {
    var guest = Guest_list_3[_e];
    console.log('Dear', guest, 'you are cordially invited to dinner. Please join us for an evening of engaging conversation and delightful company.');
}
/*--------------------------------------------*/
/*Question  No 17*/
/*--------------------------------------------*/
var Guest_list2 = ["Waqar", "Zaid", "Zain", "Mahid", "Mahad", "Danish"];
console.log("Unfortunately, the new dinner table won't arrive in time for the dinner.");
console.log("We can only invite two people for dinner.");
while (Guest_list2.length > 2) {
    var remove_guest = Guest_list2.pop(); //delete guest 
    console.log('Sorry', remove_guest, 'we won`t be able to invite you to dinner.');
}
for (var _f = 0, Guest_list2_1 = Guest_list2; _f < Guest_list2_1.length; _f++) {
    var guest = Guest_list2_1[_f];
    console.log('Dear', guest, ' you are still invited to dinner. Please join us for an evening of engaging conversation and delightful company.');
}
Guest_list2.length = 0;
console.log('Update Guest List', Guest_list2);
/*--------------------------------------------*/
/*Question  No 18*/
/*--------------------------------------------*/
var country = ["Desiny", "Bali", "Saudi Arabia", "Ice Land", "Afganistan"];
console.log('Orignal Order : ', country);
console.log('Alphabetical Order : ', country.sort());
console.log('Orignal Order : ', country);
console.log('Reverse Alphabetical Order : ', country.sort().reverse());
console.log('Orignal Order : ', country);
console.log('Reverse Order : ', country.reverse());
console.log('Orignal Order : ', country.reverse());
console.log('Alphabetical Order : ', country.sort());
console.log('Reverse Alphabetical Order : ', country.sort());
/*--------------------------------------------*/
/*Question  No 19*/
/*--------------------------------------------*/
// let Guest_list : string[] = ["Zaid","Saad","Mahad"]
console.log('Orignal Order : ', Guest_list);
console.log('Alphabetical Order : ', Guest_list.sort());
console.log('Orignal Order : ', Guest_list);
console.log('Reverse Alphabetical Order : ', Guest_list.sort().reverse());
console.log('Orignal Order : ', Guest_list);
console.log('Reverse Order : ', Guest_list.reverse());
console.log('Orignal Order : ', Guest_list.reverse());
console.log('Alphabetical Order : ', Guest_list.sort());
console.log('Reverse Alphabetical Order : ', Guest_list.sort());
for (var _g = 0, Guest_list_4 = Guest_list; _g < Guest_list_4.length; _g++) {
    var guest = Guest_list_4[_g];
    console.log('Dear', guest, 'you are cordially invited to dinner. Please join us for an evening of engaging conversation and delightful company.');
}
/*--------------------------------------------*/
/*Question  No 20*/
/*--------------------------------------------*/
var languages = ["Urdu", "English", "Punjabi", "Gujrati", "Sindhi"];
console.log(languages);
/*--------------------------------------------*/
/*Question  No 21*/
/*--------------------------------------------*/
var Objects = function (obj) {
    console.log('Name : ', obj.objects_names);
    console.log('Price : ', obj.objects_price);
    console.log('Category : ', obj.object_category);
};
Objects({ objects_names: "Dell Laptop", objects_price: 60000, object_category: "Electronics" });
/*--------------------------------------------*/
/*Question  No 22*/
/*--------------------------------------------*/
// let languages : string[] =["Urdu","English","Punjabi","Gujrati","Sindhi"]
console.log(languages[5]); //undifine output
console.log(languages[4]); //Sindhi output
/*--------------------------------------------*/
/*Question  No 23*/
/*--------------------------------------------*/
var car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
console.log("Is car != 'Honda'? I predict True.");
console.log(car != 'Honda');
console.log("Is car !== 'Suzuki'? I predict True.");
console.log(car !== 'Suzuki');
console.log("Is car < 'volvo'? I predict True.");
console.log(car < 'volvo');
console.log("Is car <= 'subaru'? I predict True.");
console.log(car <= 'subaru');
console.log("Is car  !== 'subaru'? I predict False.");
console.log(car !== 'subaru');
console.log("Is car == 'Honda'? I predict False.");
console.log(car == 'Honda');
console.log("Is car == 'ferrari'? I predict False.");
console.log(car == 'ferrari');
console.log("Is car >= 'tesla'? I predict False.");
console.log(car >= 'tesla');
console.log("Is car lenght < 5'? I predict False.");
console.log(car.length < 5);
/*--------------------------------------------*/
/*Question  No 24*/
/*--------------------------------------------*/
var string_value1 = "Hello", string_value2 = "World";
console.log("Is string_value1 == string_value2 ? I predict False.");
console.log(string_value1 == string_value2);
console.log("Is string_value1 != string_value2 ? I predict True.");
console.log(string_value1 != string_value2);
console.log("Is string_value1 lowercase 'hello'? I predict True.");
console.log(string_value1.toLowerCase() == 'hello');
var num1 = 10, num2 = 8;
console.log("Is num1 == num2 ? I predict False.");
console.log(num1 == num2);
console.log("Is num1 != num2 ? I predict True.");
console.log(num1 != num2);
console.log("Is num1 > num2 ? I predict True.");
console.log(num1 > num2);
console.log("Is num1 < num2 ? I predict False.");
console.log(num1 < num2);
console.log("Is num1 <= num2 ? I predict False.");
console.log(num1 <= num2);
console.log("Is num1 >= num2 ? I predict True.");
console.log(num1 >= num2);
console.log("Is num1 > num2 and num1 < 11? I predict True.");
console.log(num1 > num2 && num1 < 11);
console.log("Is num1 > num2 and num1 < 5? I predict True.");
console.log(num1 > num2 || num1 < 5);
var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log("Is 3 index in the array? I predict True.");
console.log(fruits.indexOf('Banana') !== -1);
var languages2 = ['C#', 'python', 'typescript', 'ruby'];
console.log("Is 3 index in the array? I predict False.");
console.log(languages2.indexOf('Java') !== -1);
/*--------------------------------------------*/
/*Question  No 25*/
/*--------------------------------------------*/
var alein_colour = 'Green';
if (alein_colour == 'Green') {
    console.log("player earned 5 points");
}
else if (alein_colour == 'red') {
}
/*--------------------------------------------*/
/*Question  No 26*/
/*--------------------------------------------*/
// let alein_colour : string = 'Green'
if (alein_colour == 'Green') {
    console.log("player earned 5 points");
}
if (alein_colour == 'Green') {
    console.log("player earned 5 points");
}
else {
    console.log("player earned 10 points");
}
/*--------------------------------------------*/
/*Question  No 27*/
/*--------------------------------------------*/
var alein_colour0 = 'Green';
if (alein_colour0 == 'Green') {
    console.log("Green Alein player earned 5 points");
}
else if (alein_colour0 == 'Yelllow') {
    console.log("Yellow Alein player earned 10 points");
}
else {
    console.log("Red Alein player earned 15 points");
}
var alein_colour1 = 'Yellow';
if (alein_colour1 == 'Green') {
    console.log("Green Alein player earned 5 points");
}
else if (alein_colour1 == 'Yellow') {
    console.log("Yellow Alein player earned 10 points");
}
else {
    console.log("Red Alein player earned 15 points");
}
var alein_colour2 = 'Red';
if (alein_colour2 == 'Green') {
    console.log("Green Alein player earned 5 points");
}
else if (alein_colour2 == 'Yelllow') {
    console.log("Yellow Alein player earned 10 points");
}
else {
    console.log("Red Alein player earned 15 points");
}
/*--------------------------------------------*/
/*Question  No 28*/
/*--------------------------------------------*/
var Age = 15;
if (Age < 2) {
    console.log('The person is a baby');
}
else if (Age < 4) {
    console.log('The person is a toddler');
}
else if (Age < 13) {
    console.log('The person is a kid');
}
else if (Age < 20) {
    console.log('The person is a teenager');
}
else if (Age < 65) {
    console.log('The person is a adult');
}
else {
    console.log('The person is a elder');
}
/*--------------------------------------------*/
/*Question  No 29*/
/*--------------------------------------------*/
// let fruits : string[] = ["Mango","Apple","Banana"]
if (fruits.indexOf("Mango") !== -1) {
    console.log('You really like Mango');
}
if (fruits.indexOf("Kiwi") !== -1) {
    console.log('You really like Kiwi');
}
if (fruits.indexOf("Watermelon") !== -1) {
    console.log('You really like watermelon');
}
if (fruits.indexOf("Apple") !== -1) {
    console.log('You really like Apple');
}
if (fruits.indexOf("Banana") !== -1) {
    console.log('You really like Banana');
}
/*--------------------------------------------*/
/*Question  No 30*/
/*--------------------------------------------*/
var user_name = ["Admin", "Eric", "Jhon", "David", "Tahir"];
for (var _h = 0, user_name_1 = user_name; _h < user_name_1.length; _h++) {
    var user = user_name_1[_h];
    if (user == "Admin") {
        console.log('Hello', user, ', would you like to see a status report?');
    }
    else {
        console.log('Hello', user, ', thank you for logging in again');
    }
}
/*--------------------------------------------*/
/*Question  No 31*/
/*--------------------------------------------*/
// let user_name : string[] = [];
if (user_name.length == 0) {
    console.log('We need to find some users!');
}
else {
    for (var _j = 0, user_name_2 = user_name; _j < user_name_2.length; _j++) {
        var user = user_name_2[_j];
        if (user == "Admin") {
            console.log('Hello', user, ', would you like to see a status report?');
        }
        else {
            console.log('Hello', user, ', thank you for logging in again');
        }
    }
}
/*--------------------------------------------*/
/*Question  No 32*/
/*--------------------------------------------*/
var Current_user = ["Tom", "Eric", "Jhon", "David", "Tahir"];
var New_User = ["Admin", "Eric", "Root", "David", "Marshal"];
var current_users_lower = Current_user.map(function (user) { return user.toLowerCase(); });
for (var _k = 0, New_User_1 = New_User; _k < New_User_1.length; _k++) {
    var users = New_User_1[_k];
    if (Current_user.indexOf(users.toLowerCase()) !== -1) {
        console.log('Sorry, the username ', users, ' is already taken. Please enter a new username.');
    }
    else {
        console.log('The username ', users, ' is available.');
    }
}
/*--------------------------------------------*/
/*Question  No 33*/
/*--------------------------------------------*/
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _l = 0, number_1 = number; _l < number_1.length; _l++) {
    var num = number_1[_l];
    var ordinal = void 0;
    if (num == 1) {
        ordinal = 'st';
    }
    else if (num == 2) {
        ordinal = 'nd';
    }
    else if (num == 3) {
        ordinal = 'rd';
    }
    else {
        ordinal = 'th';
    }
    console.log(num + ordinal);
}
/*--------------------------------------------*/
/*Question  No 34*/
/*--------------------------------------------*/
var pizza = ["pepperoni", "cheese", "chicken"];
for (var _m = 0, pizza_1 = pizza; _m < pizza_1.length; _m++) {
    var pizza_name = pizza_1[_m];
    console.log('I like', pizza_name, 'pizza.');
}
console.log(' I really love pizza!');
/*--------------------------------------------*/
/*Question  No 35*/
/*--------------------------------------------*/
var pet = ["Macaw", "Cow", "Goat"];
for (var _o = 0, pet_1 = pet; _o < pet_1.length; _o++) {
    var pet_name = pet_1[_o];
    console.log(pet_name);
    console.log('A', pet_name, 'would make a great pet.');
}
console.log('Any of these animals would make a great pet!');
/*--------------------------------------------*/
/*Question  No 36*/
/*--------------------------------------------*/
function Shirts(Size, Message) {
    console.log('Size of this shirt is ', Size, 'and print of ', Message);
}
Shirts('Medium', 'Reebok');
/*--------------------------------------------*/
/*Question  No 37*/
/*--------------------------------------------*/
function Shirts_2(Size, Message) {
    console.log('A', Size, 'shirt will be made with the message: ', Message);
}
Shirts_2('Large', 'I love TypeScript');
Shirts_2('Medium', 'I love TypeScript');
Shirts_2('Samll', 'I love C#');
/*--------------------------------------------*/
/*Question  No 38*/
/*--------------------------------------------*/
function describe_city(City, Country) {
    console.log(City, 'is in', Country);
}
describe_city('Karachi', 'Pakistan');
describe_city('Abu Dhabi', 'Dubai');
describe_city('Riyad', 'Saudia Arabia');
/*--------------------------------------------*/
/*Question  No 39*/
/*--------------------------------------------*/
function city_country(City, Country) {
    return City + ',' + Country;
}
console.log(city_country('Karachi', 'Pakistan'));
console.log(city_country('Abu Dhabi', 'Dubai'));
console.log(city_country('Riyad', 'Saudia Arabia'));
/*--------------------------------------------*/
/*Question  No 40*/
/*--------------------------------------------*/
function make_album(Artist_Nmae, Album_Title) {
    var album = {
        artist: Artist_Nmae,
        Title: Album_Title
    };
    return album;
}
var album_no1 = make_album('metallica', 'ride the lightning');
var album_no2 = make_album('beethoven', 'ninth symphony');
var album_no3 = make_album('willie nelson', 'red-headed stranger');
console.log(album_no1);
console.log(album_no2);
console.log(album_no3);
/*--------------------------------------------*/
/*Question  No 41*/
/*--------------------------------------------*/
function show_magicin1(magic) {
    for (var _i = 0, magic_1 = magic; _i < magic_1.length; _i++) {
        var magics = magic_1[_i];
        console.log(magics);
    }
}
var Magicians = ["david", "jhon"];
show_magicin1(Magicians);
/*--------------------------------------------*/
/*Question  No 42*/
/*--------------------------------------------*/
function show_magicin2(magic) {
    for (var _i = 0, magic_2 = magic; _i < magic_2.length; _i++) {
        var magics = magic_2[_i];
        console.log(magics);
    }
}
function great_magicin(magic) {
    for (var i = 0; i < magic.length; i++) {
        magic[i] = "Great " + magic[i];
    }
}
// let Magicians : string[] = ["david","jhon"]
great_magicin(Magicians);
show_magicin2(Magicians);
/*--------------------------------------------*/
/*Question  No 43*/
/*--------------------------------------------*/
function show_magicin3(magic) {
    for (var _i = 0, magic_3 = magic; _i < magic_3.length; _i++) {
        var magics = magic_3[_i];
        console.log(magics);
    }
}
function great_magicin2(magic) {
    var great_magicins = [];
    for (var _i = 0, magic_4 = magic; _i < magic_4.length; _i++) {
        var magics = magic_4[_i];
        great_magicins.push('Great ' + magics);
    }
    return great_magicins;
}
// let Magicians : string[] = ["david","jhon"]
var great_magicians = great_magicin2(Magicians);
show_magicin3(Magicians);
show_magicin3(great_magicians);
/*--------------------------------------------*/
/*Question  No 44*/
/*--------------------------------------------*/
function Sandwich() {
    var Item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Item[_i] = arguments[_i];
    }
    console.log('Sandwich Order');
    for (var _a = 0, Item_1 = Item; _a < Item_1.length; _a++) {
        var item = Item_1[_a];
        console.log(item);
    }
    console.log('--------------');
}
Sandwich("Ham", "Cheese", "Lettuce", "Tomato");
Sandwich("Turkey", "Swiss", "Mustard");
Sandwich("Peanut Butter", "Jelly");
/*--------------------------------------------*/
/*Question  No 45*/
/*--------------------------------------------*/
function car_desp(Brand, model) {
    var featurs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        featurs[_i - 2] = arguments[_i];
    }
    var car = {
        Brand: Brand,
        model: model
    };
    for (var i = 0; i < featurs.length; i += 2) {
        var element = featurs[i];
        var value = featurs[i + 1];
        car[element] = value;
    }
    return car;
}
var car_info = car_desp("Suzuki", "Cultus", "colour", "White", "Featues", "Air Bag");
console.log(car_info);
/*--------------------------------------------*/ 
