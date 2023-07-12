/*Question No 1*/
/*--------------------------------------------*/

//Installation

/*--------------------------------------------*/

/*Question  No 2*/ 
/*--------------------------------------------*/
let subject = "Hello Eric, would you like to learn some Python today?" 
console.log(subject);

/*--------------------------------------------*/

/*Question  No 3*/ 
/*--------------------------------------------*/

let Person_Name = 'Muhammad  Ali';
console.log(Person_Name.toLowerCase());
console.log(Person_Name.toUpperCase());
console.log(Person_Name.charAt(0).toUpperCase() + Person_Name.slice(1).toLowerCase());
/*--------------------------------------------*/

/*Question  No 4*/ 
/*--------------------------------------------*/

let Quote : string = 'Franklin D. Roosevelt once said, "The only thing we have to fear is fear itself."'
console.log(Quote);

/*--------------------------------------------*/

/*Question  No 5*/ 
/*--------------------------------------------*/

let famous_person : string = 'Franklin D. Roosevelt';
let Quotes : string = ' once said, "The only thing we have to fear is fear itself."';
console.log(famous_person + Quotes)

/*--------------------------------------------*/


/*Question  No 6*/ 
/*--------------------------------------------*/

let  white_space : string = '\t Muhammad Ali \n';
console.log(white_space)
let striping : string = white_space.trim();
console.log(striping);

/*--------------------------------------------*/

/*Question  No 7*/ 
/*--------------------------------------------*/

console.log('Addition = ' ,  5 + 3);
console.log('Addition = ' , 4 + 4);
console.log('Subtraction = ' , 10 - 2);
console.log('Subtraction = ' ,  16 - 8);
console.log('Multiplication = ' , 4 * 2);
console.log('Multiplication = ' , 2 * 4);
console.log('Division = ' , 16 / 2);
console.log('Division = ' , 64 / 8);


/*--------------------------------------------*/


/*Question  No 8*/ 
/*--------------------------------------------*/
console.log('Addition = ' , 4 + 4);
console.log('Subtraction = ' , 10 - 2);
console.log('Multiplication = ' , 4 * 2);
console.log('Division = ' , 16 / 2);

/*--------------------------------------------*/


/*Question  No 9*/ 
/*--------------------------------------------*/
let numbers : number = 31;
console.log('My favorite number is' , numbers);

/*--------------------------------------------*/


/*Question  No 10*/ 
/*--------------------------------------------*/

// Program 1
//Author : Fahad 
// Date : 06- July -2023
// This Program is print my favorinte number

// let numbers : number = 31;
console.log('My favorite number is' , numbers);
// Program 2
//Author : Fahad 
// Date : 06- July -2023
// This Program is perform Arithmetic operation
console.log('Addition = ' , 4 + 4);
console.log('Subtraction = ' , 10 - 2);
console.log('Multiplication = ' , 4 * 2);
console.log('Division = ' , 16 / 2);


/*--------------------------------------------*/

/*Question  No 11*/ 
/*--------------------------------------------*/


let names : string[] = ["Fahad","Zain","Tahir","Faysal"];
for (let name of names)
{
console.log(name);
}


/*--------------------------------------------*/


/*Question  No 12*/ 
/*--------------------------------------------*/


// let names : string[] = ["Fahad","Zain","Tahir","Faysal"];
for (let name of names)
{
console.log('Hello', name , 'This is a personalized message for you.');
}

/*--------------------------------------------*/

/*Question  No 13*/ 
/*--------------------------------------------*/

let motorcycle : string[] = ["Honda","Suzuki","Express","Super Star","Unique"]
for(let motor of motorcycle)
{
    console.log('I would like to own a' , motor );
}

/*--------------------------------------------*/

/*Question  No 14*/ 
/*--------------------------------------------*/

let Guest_list : string[] = ["Zaid","Saad","Mahad"]
for(let guest of Guest_list)
{
    console.log('Dear' , guest , 'you are cordially invited to dinner. Please join us for an evening of engaging conversation and delightful company.')
}

/*--------------------------------------------*/

/*Question  No 15*/ 
/*--------------------------------------------*/

// let Guest_list : string[] = ["Zaid","Saad","Mahad"]
let guestNotAvail : string = "Saad";
console.log(guestNotAvail, 'is unable to attend the dinner');
let new_Guest : string = "Mahid";
let unableGuset = Guest_list.indexOf(guestNotAvail);
if(unableGuset !== -1)
{
    Guest_list.splice(unableGuset,1,new_Guest)
}
for(let guest of Guest_list)
{
    console.log('Dear' , guest , 'you are cordially invited to dinner. Please join us for an evening of engaging conversation and delightful company.')
}

/*--------------------------------------------*/

/*Question  No 16*/ 
/*--------------------------------------------*/


let Guest_list1 : string[] = ["Zaid","Mahid","Mahad"]
Guest_list1.unshift('Waqar'); //print on 0 index
Guest_list1.splice(Math.floor(Guest_list.length / 2),0,"Zain"); // print on 2 index 
//Append is not use on TypeScript
Guest_list.push("Danish"); //print on last index
for(let guest of Guest_list)
{
    console.log('Dear' , guest , 'you are cordially invited to dinner. Please join us for an evening of engaging conversation and delightful company.')
}

/*--------------------------------------------*/

/*Question  No 17*/ 
/*--------------------------------------------*/

let Guest_list2 : string[] = ["Waqar","Zaid","Zain","Mahid","Mahad","Danish"]
console.log("Unfortunately, the new dinner table won't arrive in time for the dinner.");
console.log("We can only invite two people for dinner.");
while(Guest_list2.length  > 2)
{
let remove_guest = Guest_list2.pop(); //delete guest 
console.log('Sorry', remove_guest, 'we won`t be able to invite you to dinner.');
}
for(let guest of Guest_list2)
{
    console.log('Dear', guest ,' you are still invited to dinner. Please join us for an evening of engaging conversation and delightful company.');
}
Guest_list2.length = 0;
console.log('Update Guest List' , Guest_list2)

/*--------------------------------------------*/

/*Question  No 18*/ 
/*--------------------------------------------*/

let country : string[] = ["Desiny","Bali","Saudi Arabia","Ice Land","Afganistan"]
console.log('Orignal Order : ' , country);
console.log('Alphabetical Order : ' , country.sort());
console.log('Orignal Order : ' , country);
console.log('Reverse Alphabetical Order : ' , country.sort().reverse());
console.log('Orignal Order : ' , country);
console.log('Reverse Order : ' , country.reverse());
console.log('Orignal Order : ' , country.reverse());
console.log('Alphabetical Order : ' , country.sort());
console.log('Reverse Alphabetical Order : ' , country.sort());

/*--------------------------------------------*/

/*Question  No 19*/ 
/*--------------------------------------------*/

// let Guest_list : string[] = ["Zaid","Saad","Mahad"]
console.log('Orignal Order : ' , Guest_list);
console.log('Alphabetical Order : ' , Guest_list.sort());
console.log('Orignal Order : ' , Guest_list);
console.log('Reverse Alphabetical Order : ' , Guest_list.sort().reverse());
console.log('Orignal Order : ' , Guest_list);
console.log('Reverse Order : ' , Guest_list.reverse());
console.log('Orignal Order : ' , Guest_list.reverse());
console.log('Alphabetical Order : ' , Guest_list.sort());
console.log('Reverse Alphabetical Order : ' , Guest_list.sort());
for(let guest of Guest_list)
{
    console.log('Dear' , guest , 'you are cordially invited to dinner. Please join us for an evening of engaging conversation and delightful company.')
}

/*--------------------------------------------*/

/*Question  No 20*/ 
/*--------------------------------------------*/

let languages : string[] =["Urdu","English","Punjabi","Gujrati","Sindhi"]
console.log(languages);
/*--------------------------------------------*/

/*Question  No 21*/ 
/*--------------------------------------------*/

let Objects = function(obj: { 
    objects_names : string,
    objects_price : number,
    object_category : string
})
{
    console.log('Name : ', obj.objects_names )
    console.log('Price : ', obj.objects_price )
    console.log('Category : ', obj.object_category )
}
Objects({objects_names:"Dell Laptop", objects_price : 60000,object_category : "Electronics" })

/*--------------------------------------------*/

/*Question  No 22*/ 
/*--------------------------------------------*/
 
// let languages : string[] =["Urdu","English","Punjabi","Gujrati","Sindhi"]
console.log(languages[5]); //undifine output
console.log(languages[4]); //Sindhi output

/*--------------------------------------------*/
/*Question  No 23*/ 
/*--------------------------------------------*/

let car = 'subaru';
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

let  string_value1 : string = "Hello", string_value2  : string = "World" 
console.log("Is string_value1 == string_value2 ? I predict False.");
console.log(string_value1 == string_value2);
console.log("Is string_value1 != string_value2 ? I predict True.");
console.log(string_value1 != string_value2);
console.log("Is string_value1 lowercase 'hello'? I predict True.");
console.log(string_value1.toLowerCase() == 'hello');
let num1 : number = 10 , num2 : number = 8
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
let fruits : string[] = ['Banana', 'Orange', 'Apple', 'Mango']
console.log("Is 3 index in the array? I predict True.")
console.log(fruits.indexOf('Banana') !== -1 );
let languages2 : string[] = ['C#', 'python', 'typescript', 'ruby']
console.log("Is 3 index in the array? I predict False.")
console.log(languages2.indexOf('Java') !== -1 );
/*--------------------------------------------*/

/*Question  No 25*/ 
/*--------------------------------------------*/

let alein_colour : string = 'Green'
    if (alein_colour == 'Green')
    {
        console.log("player earned 5 points")
    }
    else if (alein_colour == 'red')
    {
    }
    
    /*--------------------------------------------*/

    /*Question  No 26*/ 
/*--------------------------------------------*/

// let alein_colour : string = 'Green'
if (alein_colour == 'Green')
{
    console.log("player earned 5 points")
}
if (alein_colour == 'Green')
{
    console.log("player earned 5 points")
}
else
{
    console.log("player earned 10 points")
}

/*--------------------------------------------*/

/*Question  No 27*/ 
/*--------------------------------------------*/


let alein_colour0 : string = 'Green'
if (alein_colour0 == 'Green')
{
    console.log("Green Alein player earned 5 points")
}
else if  (alein_colour0 == 'Yelllow')
{
    console.log("Yellow Alein player earned 10 points")
}
else 
{
    console.log("Red Alein player earned 15 points")
}
let alein_colour1 : string = 'Yellow'
if (alein_colour1 == 'Green')
{
    console.log("Green Alein player earned 5 points")
}
else if  (alein_colour1 == 'Yellow')
{
    console.log("Yellow Alein player earned 10 points")
}
else 
{
    console.log("Red Alein player earned 15 points")
}
let alein_colour2 : string = 'Red'
if (alein_colour2 == 'Green')
{
    console.log("Green Alein player earned 5 points")
}
else if  (alein_colour2 == 'Yelllow')
{
    console.log("Yellow Alein player earned 10 points")
}
else 
{
    console.log("Red Alein player earned 15 points")
}

/*--------------------------------------------*/

/*Question  No 28*/ 
/*--------------------------------------------*/

let Age : number = 15;
if (Age < 2)
{
    console.log('The person is a baby');
}
else if (Age < 4)
{
    console.log('The person is a toddler');
}
else if (Age < 13)
{
    console.log('The person is a kid');
}
else if (Age < 20)
{
    console.log('The person is a teenager');
}
else if (Age < 65)
{
    console.log('The person is a adult');
}
else
{
    console.log('The person is a elder');
}


/*--------------------------------------------*/

/*Question  No 29*/ 
/*--------------------------------------------*/

// let fruits : string[] = ["Mango","Apple","Banana"]
if(fruits.indexOf("Mango") !== -1)
{
    console.log('You really like Mango')
}
if(fruits.indexOf("Kiwi") !== -1)
{
    console.log('You really like Kiwi')
}
if(fruits.indexOf("Watermelon") !== -1)
{
    console.log('You really like watermelon')
}
if(fruits.indexOf("Apple") !== -1)
{
    console.log('You really like Apple')
}
if(fruits.indexOf("Banana") !== -1)
{
    console.log('You really like Banana')
}


/*--------------------------------------------*/

/*Question  No 30*/ 
/*--------------------------------------------*/

let user_name : string[] = ["Admin","Eric","Jhon","David","Tahir"]
for(let user of user_name)
{
    if(user == "Admin")
    {
        console.log('Hello' ,user, ', would you like to see a status report?');
    }
    else 
    {
        console.log('Hello', user ,', thank you for logging in again');
    }
}


/*--------------------------------------------*/

/*Question  No 31*/ 
/*--------------------------------------------*/

// let user_name : string[] = [];
if(user_name.length == 0)
{
    console.log('We need to find some users!');
}
else
{
    for(let user of user_name)
{
    if(user == "Admin")
    {
        console.log('Hello' ,user, ', would you like to see a status report?');
    }
    else 
    {
        console.log('Hello', user ,', thank you for logging in again');
    }
}
}


/*--------------------------------------------*/

/*Question  No 32*/ 

/*--------------------------------------------*/

let Current_user : string[] = ["Tom","Eric","Jhon","David","Tahir"]
let New_User : string[] = ["Admin","Eric","Root","David","Marshal"]
let current_users_lower : string[] = Current_user.map(user => user.toLowerCase());
for(let users of New_User)
{
if(Current_user.indexOf(users.toLowerCase()) !== -1)
{
    console.log('Sorry, the username ',users,' is already taken. Please enter a new username.');
} else {
    console.log('The username ',users,' is available.');
}    
}

/*--------------------------------------------*/

/*Question  No 33*/ 
/*--------------------------------------------*/

let number : number [] = [1,2,3,4,5,6,7,8,9]
for(let num of number)
{
    let ordinal : string;
    if (num == 1)
    {
        ordinal = 'st';
    }
    else if (num == 2)
    {
        ordinal = 'nd';
    }
    else if (num == 3)
    {
        ordinal = 'rd';
    }
    else 
    {
        ordinal = 'th';
    }
    console.log(num + ordinal);
}

/*--------------------------------------------*/

/*Question  No 34*/ 
/*--------------------------------------------*/

let pizza :string[] = ["pepperoni", "cheese","chicken"];
for (let pizza_name of pizza)
{
    console.log('I like', pizza_name,'pizza.');
}
console.log(' I really love pizza!');

/*--------------------------------------------*/

/*Question  No 35*/ 
/*--------------------------------------------*/

let pet : string[] =["Macaw","Cow","Goat"] 
for (let pet_name of pet)
{
console.log(pet_name);
console.log('A' ,pet_name ,'would make a great pet.');
}
console.log('Any of these animals would make a great pet!');

/*--------------------------------------------*/

/*Question  No 36*/ 
/*--------------------------------------------*/

function Shirts(Size  , Message) {
    console.log('Size of this shirt is ', Size ,'and print of ' , Message);
}
Shirts('Medium','Reebok')

/*--------------------------------------------*/

/*Question  No 37*/ 
/*--------------------------------------------*/

function Shirts_2(Size : string , Message: string) {
    console.log('A' ,Size , 'shirt will be made with the message: ',Message);
}
Shirts_2('Large','I love TypeScript')
Shirts_2('Medium','I love TypeScript')
Shirts_2('Samll','I love C#')

/*--------------------------------------------*/

/*Question  No 38*/ 
/*--------------------------------------------*/

function describe_city(City : string , Country : string) {
    console.log( City , 'is in',Country);
}
describe_city('Karachi','Pakistan')
describe_city('Abu Dhabi','Dubai')
describe_city('Riyad','Saudia Arabia')

/*--------------------------------------------*/

/*Question  No 39*/
/*--------------------------------------------*/

function city_country(City : string , Country : string) : string{
   return City +','+ Country;
}
console.log(city_country('Karachi','Pakistan'));
console.log(city_country('Abu Dhabi','Dubai'));
console.log(city_country('Riyad','Saudia Arabia'));

/*--------------------------------------------*/

 /*Question  No 40*/
/*--------------------------------------------*/

function make_album(Artist_Nmae:string , Album_Title: string) : string {
    
    let album : any = 
    {
        artist : Artist_Nmae,
        Title : Album_Title
    };
    return album;
}
let album_no1 = make_album('metallica', 'ride the lightning');
let album_no2 =make_album('beethoven', 'ninth symphony');
let album_no3 =make_album('willie nelson', 'red-headed stranger');
console.log(album_no1);
console.log(album_no2);
console.log(album_no3);

/*--------------------------------------------*/

/*Question  No 41*/
/*--------------------------------------------*/

function show_magicin1(magic:string[]) {
    for (let magics of magic )
    {
        console.log(magics)
    }
}
let Magicians : string[] = ["david","jhon"]
show_magicin1(Magicians);

/*--------------------------------------------*/

/*Question  No 42*/
/*--------------------------------------------*/

function show_magicin2(magic:string[]) {
    for (let magics of magic )
    {
        console.log(magics)
    }
}
function great_magicin(magic:string[]) {
    for (let i = 0; i < magic.length; i++) {
        magic[i] = "Great " + magic[i];
      }
}
// let Magicians : string[] = ["david","jhon"]
great_magicin(Magicians);
show_magicin2(Magicians);


/*--------------------------------------------*/

/*Question  No 43*/
/*--------------------------------------------*/

function show_magicin3(magic:string[]) {
    for (let magics of magic )
    {
        console.log(magics)
    }
}
function great_magicin2(magic:string[]) : string[] {
    let great_magicins : string[] = []
for(let magics of magic)
{
    great_magicins.push('Great ' + magics)
}
return great_magicins;
}
// let Magicians : string[] = ["david","jhon"]
let great_magicians : string[] = great_magicin2(Magicians)
show_magicin3(Magicians);
show_magicin3(great_magicians);

/*--------------------------------------------*/

/*Question  No 44*/
/*--------------------------------------------*/

function Sandwich(...Item : string[])  {
    console.log('Sandwich Order');
    for(let item of Item)
    {
        console.log(item);
    }
    console.log('--------------')
}
Sandwich("Ham", "Cheese", "Lettuce", "Tomato");
Sandwich("Turkey", "Swiss", "Mustard");
Sandwich("Peanut Butter", "Jelly");


/*--------------------------------------------*/

/*Question  No 45*/
/*--------------------------------------------*/

function car_desp(Brand, model, ...featurs) {
    let car = 
    {
Brand : Brand,
model : model
    };
    for (let i = 0; i < featurs.length; i += 2) {
      let element = featurs[i];
      let value = featurs[i + 1];
      car[element] = value
        
    }
    return car;
}
let car_info = car_desp("Suzuki","Cultus","colour", "White", "Featues" , "Air Bag");
console.log(car_info);

/*--------------------------------------------*/