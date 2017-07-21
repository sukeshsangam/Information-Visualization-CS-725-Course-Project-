country2=[];


 
  
function uniq(a) {
    var seen = {};
    return a.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });

}



director=[]
f_director=[]
final_director=[]
d3.json("data.json",function(data){
	

var temp;
 for(i=0;i<data.length;i++)
{
temp=data[i];
 director.push(temp["director_name"]);
}
//console.log(director)

for(i=0;i<director.length;i++)
{
temp=director[i];
a=temp.split('|');
for(j=0;j<a.length;j++)
{
final_director.push(a[j]);
}
}
//console.log(final_director);
arr = final_director.filter(Boolean)
//console.log(ar
f_director= uniq(arr)
//console.log(f_director)

function uniq(a) {
    var seen = {};
    return a.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });

}});













var select = document.getElementById('sel1');



 



var SelectedCountry;
var data2=[]



function getval(sel)
{
	
//console.log("All");
//console.log("hi");
var d_Ac=0
var d_Ad=0
var d_Ani=0
var d_Bio=0
var d_co=0
var d_crime=0
var d_drama=0
var d_family=0
var d_fantacy=0
var d_film_noir=0
var d_history=0
var d_Horror=0
var d_music=0
var d_musical=0
var d_mystery=0
var d_romance=0
var d_sci=0
var d_sport=0
var d_thriller=0
var d_war=0
var d_western=0

console.log(sel);
if(sel=="All")
{
	SelectedCountry=sel;
}else{
    SelectedCountry=sel.value; 
}
   console.log(SelectedCountry);
    d3.json("data.json",function(data){
	$('#circlechart').empty();
data2=data;
country=[];
for(i=0;i<data.length;i++)
{
temp=data[i]
country.push(temp["country"]);
compare_country=temp["country"];
//n=compare_country.includes(SelectedCountry);
//console.log(n);
//console.log(SelectedCountry);
if(compare_country.includes(SelectedCountry)||SelectedCountry.includes("All"))
{
//console.log(compare_country);




if(temp['genre']=="Action")
{
d_Ac++;
}
if(temp['genre']=="Adventure")
{
d_Ad++;
}
if(temp['genre']=="Animation")
{
d_Ani++
}
if(temp['genre']=="Biography")
{
d_Bio++
}
if(temp['genre']=="Comedy")
{
d_co++
}
if(temp['genre']=="Crime")
{
d_crime++
}
if(temp['genre']=="Drama")
{
d_drama++
}
if(temp['genre']=="Family")
{
d_family++
}
if(temp['genre']=="Fantacy")
{
d_fantacy++
}
if(temp['genre']=="Film-Noir")
{
d_film_noir++
}
if(temp['genre']=="History")
{
d_history++
}
if(temp['genre']=="Horror")
{
d_Horror++
}
if(temp['genre']=="Music")
{
d_music++
}
if(temp['genre']=="Musical")
{
d_musical++
}
if(temp['genre']=="Mystery")
{
d_mystery++
}
if(temp['genre']=="Romance")
{
d_romance++
}
if(temp['genre']=="Sci-Fi")
{
d_sci++
}
if(temp['genre']=="Sport")
{
d_sport++
}
if(temp['genre']=="Thriller")
{
d_thriller++
}
if(temp['genre']=="War")
{
d_war++
//console.log(temp)

}
if(temp['genre']=="western")
{
d_western++
//console.log(temp)

}
}

//console.log(d_Ac)

}


var select = document.getElementById('sel1');

array_final= []

dic={}
//console.log(d_Ac)
		if(d_Ac!=0)
		{
		dic['Action']=d_Ac
		}
		if(d_Ad!=0)
		{
		dic['Adventure']=d_Ad
		}
		if(d_Ani!=0)
		{
		dic['Animation']=d_Ani
		}
		if(d_Bio!=0)
		{
		dic['Biography']=d_Bio
		}
		if(d_co!=0)
		{
		dic['Comedy']=d_co
		}
		if(d_crime!=0)
		{
		dic['Crime']=d_crime
		}
		if(d_drama!=0)
		{
		dic['Drama']=d_drama
		}
		if(d_family!=0)
		{
		dic['Family']=d_family
		}
		if(d_fantacy!=0)
		{
		dic['Fantacy']=d_fantacy
		}
		if(d_film_noir!=0)
		{
		dic['Film-Noir']=d_film_noir
		}
		if(d_history!=0)
		{
		dic['History']=d_history
		}
		if(d_Horror!=0)
		{
		dic['Horror']=d_Horror
		}
		if(d_music!=0)
		{
		dic['Music']=d_music
		}
		if(d_musical!=0)
		{
		dic['Musical']=d_musical
		}
		if(d_mystery!=0)
		{
		dic['Mystery']=d_mystery
		}
		if(d_romance!=0)
		{
		dic['Romance']=d_romance
		}
		if(d_sci!=0)
		{
		dic['Sci-Fi']=d_sci
		}
		if(d_sport!=0)
		{
		dic['Sport']=d_sport
		}
		if(d_thriller!=0)
		{
		dic['Thriller']=d_thriller
		}
		if(d_war!=0)
		{
		dic['War']=d_war
		}
		if(d_western!=0)
		{
		dic['western']=d_western
		}
		//console.log(dic)

		final1=[]
		for(var key in dic)
		{
		temp_dic={}
		temp_dic['genre']=key
		temp_dic['count']=dic[key]
		final1.push(temp_dic)
		
		}
		//console.log(final1)
		$("#trend").empty();
		console.log(SelectedCountry+"jaffa")
		loadBubbleChart(final1,SelectedCountry);
		trend(SelectedCountry);

});

	
	
	
	
}

function loadCircleParking(s)
{

$('#circlechart').empty();


var dictionary_obj={};
var arr1=[];
var dic_rating1={};
var arr1_arr1=[];
var arr1_arr2=[];
var arr1_arr3=[];
var arr1_arr4=[];
var arr1_arr5=[];
var arr1_arr6=[];




temp_arr=[];
for(i=0;i<data2.length;i++)
{
temp=data2[i];
if(temp['genre']==s)
{
temp_arr.push(temp);

}




}

//console.log(temp_arr);

dir_0_5=[]
dir_5_6=[]
dir_6_7=[]
dir_7_8=[]
dir_8_9=[]
dir_9_10=[]
star_0_5=[]
star_5_6=[]
star_6_7=[]
star_7_8=[]
star_8_9=[]
star_9_10=[]
for(i=0;i<data2.length;i++)
{
	temp=data2[i];
coun=temp['country']
temp_arr=[]
	if(coun.includes(SelectedCountry)||SelectedCountry.includes("All"))
{
if(temp['genre']==s)
{
	if(temp['rating']>0&&temp['rating']<=5)
{
    a=temp['director_name']
	
	b=temp['stars']
	
	temp_arr0=b.split('|')
	
	temp_arr=a.split('|')
	dir_0_5.push(temp_arr[1])
	star_0_5.push(temp_arr0[1])
	console.log(temp_arr0)
	/*for(i=0;i<temp_arr.length;i++)
	{
	dir_0_5.push(temp_arr[i])
	}*/
	}
	if(temp['rating']>5&&temp['rating']<=6)
{
	
	 a=temp['director_name']
	 b=temp['stars']
	
	temp_arr0=b.split('|')
	 
	temp_arr=a.split('|')
	
	dir_5_6.push(temp_arr[1])
	star_5_6.push(temp_arr0[1])
	console.log(temp_arr0)
}
	if(temp['rating']>6&&temp['rating']<=7)
{
	 a=temp['director_name']
	 b=temp['stars']
	
	temp_arr0=b.split('|')
	temp_arr=a.split('|')
	dir_6_7.push(temp_arr[1])
	star_6_7.push(temp_arr0[1])
	console.log(temp_arr0)
}
	if(temp['rating']>7&&temp['rating']<=8)
{
	 a=temp['director_name']
	 b=temp['stars']
	
	temp_arr0=b.split('|')
	temp_arr=a.split('|')
	
	dir_7_8.push(temp_arr[1])
	star_7_8.push(temp_arr0[1])
	console.log(temp_arr0)
}
	if(temp['rating']>8&&temp['rating']<=9)
{
	 a=temp['director_name']
	 b=temp['stars']
	
	temp_arr0=b.split('|')
	temp_arr=a.split('|')
	dir_8_9.push(temp_arr[1])
	star_8_9.push(temp_arr0[1])
	console.log(temp_arr0)
}
	
	if(temp['rating']>9&&temp['rating']<=10)
{
	 a=temp['director_name']
	 b=temp['stars']
	
	temp_arr0=b.split('|')
	temp_arr=a.split('|')
	console.log(temp_arr0)
	dir_9_10.push(temp_arr[1])
	star_9_10.push(temp_arr0[1])
}
	
}
}
}
star_0_5=uniq(star_0_5)
star_5_6=uniq(star_5_6)
star_6_7=uniq(star_6_7)
star_7_8=uniq(star_7_8)
star_8_9=uniq(star_8_9)
star_9_10=uniq(star_9_10)

dir_0_5=uniq(dir_0_5)
dir_5_6=uniq(dir_5_6)
dir_6_7=uniq(dir_6_7)
dir_7_8=uniq(dir_7_8)
dir_8_9=uniq(dir_8_9)
dir_9_10=uniq(dir_9_10)


console.log(star_9_10);
console.log(star_0_5);
console.log(star_5_6);
console.log(star_6_7);
console.log(star_7_8);
console.log(star_8_9);
var radios_circle="director";
logic(radios_circle);
$('#circlechart1 input[type=radio][name=circle_parking]').change(function() {
	
	$('#circlechart').empty();
	
	       radios_circle = this.value;
		   
		   
		   //console.log(radios_circle);
		   
	        //if (value == "year_bar")
	       // {
			   //$('#circlechart1').empty();
			   
			   
			   
			   $('#circlechart').empty();
				logic(radios_circle);
				
				
				//$("input[name='gender'][value='year_bar']").prop("checked",true);

 });
//var radios_circle = document.getElementById("myRadio1").value;



function logic(radios_circle)
{
	$('#circlechart').empty();
	
if(radios_circle.includes("director"))
{
	$("#circleTitle").text("Circle Packing of Movies According to Rating and Director");
	
}
if(radios_circle.includes("star"))
{
	$("#circleTitle").text("Circle Packing of Movies According to Rating and Star");
	
}
	
console.log(" csadasd "+ radios_circle);
if(SelectedCountry.includes("All")&&s=="Drama"&&radios_circle.includes("director"))
{
	d3.json("all_drama.json",function(dictionary_obj){
		
		circle(dictionary_obj);
	})
	console.log(dictionary_obj);
}
else if(SelectedCountry.includes("All")&&s=="Comedy"&&radios_circle.includes("director"))
{
	d3.json("all_comedy.json",function(dictionary_obj){
		
		circle(dictionary_obj);
	})
	console.log(dictionary_obj);
}
else if(SelectedCountry.includes("All")&&s=="Thriller"&&radios_circle.includes("director"))
{
	d3.json("all_thriller.json",function(dictionary_obj){
		//console.log(data);
		//dictionary_obj=data;
		//console.log(dictionary_obj["name"]);
		circle(dictionary_obj);
	})
	console.log(dictionary_obj);
}
else if(SelectedCountry.includes("All")&&s=="Crime"&&radios_circle.includes("director"))
{
	d3.json("all_crime.json",function(dictionary_obj){
		//console.log(data);
		//dictionary_obj=data;
		//console.log(dictionary_obj["name"]);
		circle(dictionary_obj);
	})
	console.log(dictionary_obj);
}
else if(SelectedCountry.includes("All")&&s=="Action"&&radios_circle.includes("director"))
{
	d3.json("all_action.json",function(dictionary_obj){
		//console.log(data);
		//dictionary_obj=data;
		//console.log(dictionary_obj["name"]);
		circle(dictionary_obj);
	})
	console.log(dictionary_obj);
}
else if(SelectedCountry.includes("All")&&s=="Adventure"&&radios_circle.includes("director"))
{
	d3.json("all_action.json",function(dictionary_obj){
		//console.log(data);
		//dictionary_obj=data;
		//console.log(dictionary_obj["name"]);
		circle(dictionary_obj);
	})
	console.log(dictionary_obj);
}
else if(SelectedCountry.includes("All")&&s=="Romance"&&radios_circle.includes("director"))
{
	d3.json("all_romance.json",function(dictionary_obj){
		//console.log(data);
		//dictionary_obj=data;
		//console.log(dictionary_obj["name"]);
		circle(dictionary_obj);
	})
	console.log(dictionary_obj);
}
else if(SelectedCountry.includes("All")&&s=="Mystery"&&radios_circle.includes("director"))
{
	d3.json("all_mystery.json",function(dictionary_obj){
		//console.log(data);
		//dictionary_obj=data;
		//console.log(dictionary_obj["name"]);
		circle(dictionary_obj);
	})
	console.log(dictionary_obj);
}

else if(SelectedCountry.includes("All")&&s=="Fantacy"&&radios_circle.includes("director"))
{
	d3.json("all_fantacy.json",function(dictionary_obj){
		//console.log(data);
		//dictionary_obj=data;
		//console.log(dictionary_obj["name"]);
		circle(dictionary_obj);
	})
	console.log(dictionary_obj);
}
else if(SelectedCountry.includes("All")&&s=="Family"&&radios_circle.includes("director"))
{
	d3.json("all_fantacy.json",function(dictionary_obj){
		//console.log(data);
		//dictionary_obj=data;
		//console.log(dictionary_obj["name"]);
		circle(dictionary_obj);
	})
	console.log(dictionary_obj);
}
else if(SelectedCountry.includes("All")&&s=="Horror"&&radios_circle.includes("director"))
{
	d3.json("all_horror.json",function(dictionary_obj){
		//console.log(data);
		//dictionary_obj=data;
		//console.log(dictionary_obj["name"]);
		circle(dictionary_obj);
	})
	console.log(dictionary_obj);
}
else if(SelectedCountry.includes("All")&&s=="Sci-Fi"&&radios_circle.includes("director"))
{
	d3.json("all_scifi.json",function(dictionary_obj){
		//console.log(data);
		//dictionary_obj=data;
		//console.log(dictionary_obj["name"]);
		circle(dictionary_obj);
	})
	console.log(dictionary_obj);
}
else if(SelectedCountry.includes("All")&&s=="Sport"&&radios_circle.includes("director"))
{
	d3.json("all_sport.json",function(dictionary_obj){
		//console.log(data);
		//dictionary_obj=data;
		//console.log(dictionary_obj["name"]);
		circle(dictionary_obj);
	})
	console.log(dictionary_obj);
}
else if(SelectedCountry.includes("All")&&s=="History"&&radios_circle.includes("director"))
{
	d3.json("all_history.json",function(dictionary_obj){
		//console.log(data);
		//dictionary_obj=data;
		//console.log(dictionary_obj["name"]);
		circle(dictionary_obj);
	})
	console.log(dictionary_obj);
}
else if(SelectedCountry.includes("All")&&s=="Biography"&&radios_circle.includes("director"))
{
	d3.json("all_biography.json",function(dictionary_obj){
		//console.log(data);
		//dictionary_obj=data;
		//console.log(dictionary_obj["name"]);
		circle(dictionary_obj);
	})
	console.log(dictionary_obj);
}
else if(SelectedCountry.includes("All")&&s=="Animation"&&radios_circle.includes("director"))
{
	d3.json("all_animation.json",function(dictionary_obj){
		//console.log(data);
		//dictionary_obj=data;
		//console.log(dictionary_obj["name"]);
		circle(dictionary_obj);
	})
	console.log(dictionary_obj);
}
else if(SelectedCountry.includes("All")&&s=="Musical"&&radios_circle.includes("director"))
{
	d3.json("all_musical.json",function(dictionary_obj){
		//console.log(data);
		//dictionary_obj=data;
		//console.log(dictionary_obj["name"]);
		circle(dictionary_obj);
	})
	console.log(dictionary_obj);
}
else if(SelectedCountry.includes("All")&&s=="Music"&&radios_circle.includes("director"))
{
	d3.json("all_music.json",function(dictionary_obj){
		//console.log(data);
		//dictionary_obj=data;
		//console.log(dictionary_obj["name"]);
		circle(dictionary_obj);
	})
	console.log(dictionary_obj);
}
else if(SelectedCountry.includes("All")&&s=="War"&&radios_circle.includes("director"))
{
	d3.json("all_war.json",function(dictionary_obj){
		//console.log(data);
		//dictionary_obj=data;
		//console.log(dictionary_obj["name"]);
		circle(dictionary_obj);
	})
	console.log(dictionary_obj);
}
else if(SelectedCountry.includes("All")&&s=="western"&&radios_circle.includes("director"))
{
	d3.json("all_western.json",function(dictionary_obj){
		//console.log(data);
		//dictionary_obj=data;
		//console.log(dictionary_obj["name"]);
		circle(dictionary_obj);
	})
	console.log(dictionary_obj);
}

else if(SelectedCountry.includes("USA")&&s=="Action"&&radios_circle.includes("director"))
{
	d3.json("usa_action.json",function(dictionary_obj){
		//console.log(data);
		//dictionary_obj=data;
		//console.log(dictionary_obj["name"]);
		circle(dictionary_obj);
	})
	console.log(dictionary_obj);
}

else if(SelectedCountry.includes("USA")&&s=="Comedy"&&radios_circle.includes("director"))
{
	d3.json("usa_comedy.json",function(dictionary_obj){
		//console.log(data);
		//dictionary_obj=data;
		//console.log(dictionary_obj["name"]);
		circle(dictionary_obj);
	})
	console.log(dictionary_obj);
}

else if(SelectedCountry.includes("USA")&&s=="Thriller"&&radios_circle.includes("director"))
{
	d3.json("usa_thriller.json",function(dictionary_obj){
		//console.log(data);
		//dictionary_obj=data;
		//console.log(dictionary_obj["name"]);
		circle(dictionary_obj);
	})
	console.log(dictionary_obj);
}
else if(SelectedCountry.includes("USA")&&s=="Drama"&&radios_circle.includes("director"))
{
	d3.json("usa_drama.json",function(dictionary_obj){
		//console.log(data);
		//dictionary_obj=data;
		//console.log(dictionary_obj["name"]);
		circle(dictionary_obj);
	})
	console.log(dictionary_obj);
}

else if(SelectedCountry.includes("USA")&&s=="Adventure" &&radios_circle.includes("director"))
{
	d3.json("usa_adventure.json",function(dictionary_obj){
		//console.log(data);
		//dictionary_obj=data;
		//console.log(dictionary_obj["name"]);
		circle(dictionary_obj);
	})
	console.log(dictionary_obj);
}


else if(SelectedCountry.includes("USA")&&s=="Crime" &&radios_circle.includes("director"))
{
	d3.json("usa_crime.json",function(dictionary_obj){
		//console.log(data);
		//dictionary_obj=data;
		//console.log(dictionary_obj["name"]);
		circle(dictionary_obj);
	})
	console.log(dictionary_obj);
}
else if(SelectedCountry.includes("USA")&&s=="Romance" && radios_circle.includes("director"))
{
	d3.json("usa_romance.json",function(dictionary_obj){
		//console.log(data);
		//dictionary_obj=data;
		//console.log(dictionary_obj["name"]);
		circle(dictionary_obj);
	})
	console.log(dictionary_obj);
}
else if(SelectedCountry.includes("USA")&&s=="Fantacy" && radios_circle.includes("director"))
{
	d3.json("usa_fantacy.json",function(dictionary_obj){
		//console.log(data);
		//dictionary_obj=data;
		//console.log(dictionary_obj["name"]);
		circle(dictionary_obj);
	})
	console.log(dictionary_obj);
}
else if(SelectedCountry.includes("USA")&&s=="Sci-Fi" && radios_circle.includes("director"))
{
	d3.json("usa_scifi.json",function(dictionary_obj){
		//console.log(data);
		//dictionary_obj=data;
		//console.log(dictionary_obj["name"]);
		circle(dictionary_obj);
	})
	console.log(dictionary_obj);
}
else if(SelectedCountry.includes("USA")&&s=="Horror"  && radios_circle.includes("director"))
{
	d3.json("usa_horror.json",function(dictionary_obj){
		//console.log(data);
		//dictionary_obj=data;
		//console.log(dictionary_obj["name"]);
		circle(dictionary_obj);
	})
	console.log(dictionary_obj);
}
else if(SelectedCountry.includes("USA")&&s=="Mystery" && radios_circle.includes("director"))
{
	d3.json("usa_mystery.json",function(dictionary_obj){
		//console.log(data);
		//dictionary_obj=data;
		//console.log(dictionary_obj["name"]);
		circle(dictionary_obj);
	})
	console.log(dictionary_obj);
}
else if(SelectedCountry.includes("USA")&& s=="Family" && radios_circle.includes("director"))
{
	d3.json("usa_family.json",function(dictionary_obj){
		//console.log(data);
		//dictionary_obj=data;
		//console.log(dictionary_obj["name"]);
		circle(dictionary_obj);
	})
	console.log(dictionary_obj);
}





else{
//debugger;


dictionary_obj={};



test_arr_0_5=[]
if(radios_circle.includes("director"))
{
for(z=0;z<dir_0_5.length;z++)
{
	temp_dic={}
	temp_array=[]
for(i=0;i<data2.length;i++)
{
	temp_dic2={}
	temp=data2[i];
	coun=temp['country'];
if(coun.includes(SelectedCountry)||SelectedCountry.includes("All"))
{
if(temp['genre']==s)
{
	
	if(temp['rating']>0&&temp['rating']<=5)
{
	temp_str=temp['director_name']
if(temp_str.includes(dir_0_5[z]))
	{
		temp_dic2['name']=temp['title'];
        temp_dic2['size']=100;
		temp_array.push(temp_dic2)
	//	console.log(temp_array)
	}
	}
}
	
	
}
}
temp_dic["name"]=dir_0_5[z]
temp_dic["children"]=temp_array
test_arr_0_5.push(temp_dic)
}
}
else if(radios_circle.includes("star"))
{
for(z=0;z<star_0_5.length;z++)
{
	temp_dic={}
	temp_array=[]
for(i=0;i<data2.length;i++)
{
	temp_dic2={}
	temp=data2[i];
	coun=temp['country'];
if(coun.includes(SelectedCountry)||SelectedCountry.includes("All"))
{
if(temp['genre']==s)
{
	
	if(temp['rating']>0&&temp['rating']<=5)
{
	temp_str=temp['stars']
if(temp_str.includes(star_0_5[z]))
	{
		temp_dic2['name']=temp['title'];
        temp_dic2['size']=100;
		temp_array.push(temp_dic2)
	//	console.log(temp_array)
	}
	}
}
	
	
}
}
temp_dic["name"]=star_0_5[z]
temp_dic["children"]=temp_array
test_arr_0_5.push(temp_dic)
}


}








//console.log(test_arr_0_5);

// 5-6 rating

test_arr_5_6=[]

if(radios_circle.includes("director"))
{
for(z=0;z<dir_5_6.length;z++)
{
	temp_dic={}
	temp_array=[]
for(i=0;i<data2.length;i++)
{
	temp_dic2={}
	temp=data2[i];
	coun=temp['country'];
if(coun.includes(SelectedCountry)||SelectedCountry.includes("All"))
{
if(temp['genre']==s)
{
	
	if(temp['rating']>5&&temp['rating']<=6)
{
	temp_str=temp['director_name']
	if(temp_str.includes(dir_5_6[z]))
	{
		temp_dic2['name']=temp['title'];
        temp_dic2['size']=100;
		temp_array.push(temp_dic2)
	//	console.log(temp_array)
	}
	}
}
	
	
}
}
temp_dic["name"]=dir_5_6[z]
temp_dic["children"]=temp_array
test_arr_5_6.push(temp_dic)
}
}
else if(radios_circle.includes("star"))
{
	
for(z=0;z<star_5_6.length;z++)
{
	temp_dic={}
	temp_array=[]
for(i=0;i<data2.length;i++)
{
	temp_dic2={}
	temp=data2[i];
	coun=temp['country'];
if(coun.includes(SelectedCountry)||SelectedCountry.includes("All"))
{
if(temp['genre']==s)
{
	
	if(temp['rating']>5&&temp['rating']<=6)
{
	temp_str=temp['stars']
	if(temp_str.includes(star_5_6[z]))
	{
		temp_dic2['name']=temp['title'];
        temp_dic2['size']=100;
		temp_array.push(temp_dic2)
	//	console.log(temp_array)
	}
	}
}
	
	
}
}
temp_dic["name"]=star_5_6[z]
temp_dic["children"]=temp_array
test_arr_5_6.push(temp_dic)
}	
	
	
	
	
	
	
}
//console.log(test_arr_5_6);

// 6-7 rating

test_arr_6_7=[]

if(radios_circle.includes("director"))
{

for(z=0;z<dir_6_7.length;z++)
{
	temp_dic={}
	temp_array=[]
for(i=0;i<data2.length;i++)
{
	temp_dic2={}
	temp=data2[i];
	coun=temp['country'];
if(coun.includes(SelectedCountry)||SelectedCountry.includes("All"))
{
if(temp['genre']==s)
{
	
	if(temp['rating']>6&&temp['rating']<=7)
{
	temp_str=temp['director_name']
	if(temp_str.includes(dir_6_7[z]))
	{
		temp_dic2['name']=temp['title'];
        temp_dic2['size']=100;
		temp_array.push(temp_dic2)
	//	console.log(temp_array)
	}
	}
}
	
	
}
}
temp_dic["name"]=dir_6_7[z]
temp_dic["children"]=temp_array
test_arr_6_7.push(temp_dic)
}
}

else if(radios_circle.includes("star"))
{
	
	
	for(z=0;z<star_6_7.length;z++)
{
	temp_dic={}
	temp_array=[]
for(i=0;i<data2.length;i++)
{
	temp_dic2={}
	temp=data2[i];
	coun=temp['country'];
if(coun.includes(SelectedCountry)||SelectedCountry.includes("All"))
{
if(temp['genre']==s)
{
	
	if(temp['rating']>6&&temp['rating']<=7)
{
	temp_str=temp['stars']
	if(temp_str.includes(star_6_7[z]))
	{
		temp_dic2['name']=temp['title'];
        temp_dic2['size']=100;
		temp_array.push(temp_dic2)
	//	console.log(temp_array)
	}
	}
}
	
	
}
}
temp_dic["name"]=star_6_7[z]
temp_dic["children"]=temp_array
test_arr_6_7.push(temp_dic)
}
	
	
	
	
	
}
//console.log(test_arr_6_7);

// 7-8 rating

test_arr_7_8=[]
if(radios_circle.includes("director"))
{

for(z=0;z<dir_7_8.length;z++)
{
	temp_dic={}
	temp_array=[]
for(i=0;i<data2.length;i++)
{
	temp_dic2={}
	temp=data2[i];
	coun=temp['country'];
if(coun.includes(SelectedCountry)||SelectedCountry.includes("All"))
{
if(temp['genre']==s)
{
	
	if(temp['rating']>7&&temp['rating']<=8)
{
	temp_str=temp['director_name']
	if(temp_str.includes(dir_7_8[z]))
	{
		temp_dic2['name']=temp['title'];
        temp_dic2['size']=100;
		temp_array.push(temp_dic2)
	//	console.log(temp_array)
	}
	}
}
	
	
}
}
temp_dic["name"]=dir_7_8[z]
temp_dic["children"]=temp_array
test_arr_7_8.push(temp_dic)
}
}
else if(radios_circle.includes("star"))
	

	{
		
		
		for(z=0;z<star_7_8.length;z++)
{
	temp_dic={}
	temp_array=[]
for(i=0;i<data2.length;i++)
{
	temp_dic2={}
	temp=data2[i];
	coun=temp['country'];
if(coun.includes(SelectedCountry)||SelectedCountry.includes("All"))
{
if(temp['genre']==s)
{
	
	if(temp['rating']>7&&temp['rating']<=8)
{
	temp_str=temp['stars']
	if(temp_str.includes(star_7_8[z]))
	{
		temp_dic2['name']=temp['title'];
        temp_dic2['size']=100;
		temp_array.push(temp_dic2)
	//	console.log(temp_array)
	}
	}
}
	
	
}
}
temp_dic["name"]=star_7_8[z]
temp_dic["children"]=temp_array
test_arr_7_8.push(temp_dic)
}
		
		
		
		
		
	}
//console.log(test_arr_7_8);

// 8-9 rating

test_arr_8_9=[]


if(radios_circle.includes("director"))
{


for(z=0;z<dir_8_9.length;z++)
{
	temp_dic={}
	temp_array=[]
for(i=0;i<data2.length;i++)
{
	temp_dic2={}
	temp=data2[i];
	coun=temp['country'];
if(coun.includes(SelectedCountry)||SelectedCountry.includes("All"))
{
if(temp['genre']==s)
{
	
	if(temp['rating']>8&&temp['rating']<=9)
{
	temp_str=temp['director_name']
	if(temp_str.includes(dir_8_9[z]))
	{
		temp_dic2['name']=temp['title'];
        temp_dic2['size']=100;
		temp_array.push(temp_dic2)
	//	console.log(temp_array)
	}
	}
}
	
	
}
}
temp_dic["name"]=dir_8_9[z]
temp_dic["children"]=temp_array
test_arr_8_9.push(temp_dic)
}
}
else if(radios_circle.includes("star"))
{

for(z=0;z<star_8_9.length;z++)
{
	temp_dic={}
	temp_array=[]
for(i=0;i<data2.length;i++)
{
	temp_dic2={}
	temp=data2[i];
	coun=temp['country'];
if(coun.includes(SelectedCountry)||SelectedCountry.includes("All"))
{
if(temp['genre']==s)
{
	
	if(temp['rating']>8&&temp['rating']<=9)
{
	temp_str=temp['stars']
	if(temp_str.includes(star_8_9[z]))
	{
		temp_dic2['name']=temp['title'];
        temp_dic2['size']=100;
		temp_array.push(temp_dic2)
	//	console.log(temp_array)
	}
	}
}
	
	
}
}
temp_dic["name"]=star_8_9[z]
temp_dic["children"]=temp_array
test_arr_8_9.push(temp_dic)
}	
	
	
	
}


//console.log(test_arr_8_9);


// 9-10 ratings


test_arr_9_10=[]

if(radios_circle.includes("director"))
{

for(z=0;z<dir_9_10.length;z++)
{
	temp_dic={}
	temp_array=[]
for(i=0;i<data2.length;i++)
{
	temp_dic2={}
	temp=data2[i];
	coun=temp['country'];
if(coun.includes(SelectedCountry)||SelectedCountry.includes("All"))
{
if(temp['genre']==s)
{
	
	if(temp['rating']>9&&temp['rating']<=10)
{
	temp_str=temp['director_name']
	if(temp_str.includes(dir_9_10[z]))
	{
		temp_dic2['name']=temp['title'];
        temp_dic2['size']=100;
		temp_array.push(temp_dic2)
	//	console.log(temp_array)
	}
	}
}
	
	
}
}
temp_dic["name"]=dir_9_10[z]
temp_dic["children"]=temp_array
test_arr_9_10.push(temp_dic)
}

}


else if(radios_circle.includes("star"))
{
	
	
	for(z=0;z<star_9_10.length;z++)
{
	temp_dic={}
	temp_array=[]
for(i=0;i<data2.length;i++)
{
	temp_dic2={}
	temp=data2[i];
	coun=temp['country'];
if(coun.includes(SelectedCountry)||SelectedCountry.includes("All"))
{
if(temp['genre']==s)
{
	
	if(temp['rating']>9&&temp['rating']<=10)
{
	temp_str=temp['stars']
	if(temp_str.includes(star_9_10[z]))
	{
		temp_dic2['name']=temp['title'];
        temp_dic2['size']=100;
		temp_array.push(temp_dic2)
	//	console.log(temp_array)
	}
	}
}
	
	
}
}
temp_dic["name"]=star_9_10[z]
temp_dic["children"]=temp_array
test_arr_9_10.push(temp_dic)
}

	
	
	
	
	
}
arr1 = [];
//console.log(test_arr_9_10);
arr1_dic1={};
arr1_dic2={};
arr1_dic3={};
arr1_dic4={};
arr1_dic5={};
arr1_dic6={};
//console.log(arr1_arr1);
if(test_arr_0_5.length!=0)
{

arr1_dic1["name"]="0-5 Rating";
arr1_dic1["children"]=test_arr_0_5;

arr1.push(arr1_dic1);
}
if(test_arr_5_6.length!=0)
{
arr1_dic2["name"]="5-6 Rating";
arr1_dic2["children"]=test_arr_5_6;
arr1.push(arr1_dic2);
}
if(test_arr_6_7.length!=0)
{
arr1_dic3["name"]="6-7 Rating"
arr1_dic3["children"]=test_arr_6_7;
arr1.push(arr1_dic3);
}
if(test_arr_7_8.length!=0)
{
arr1_dic4["name"]="7-8 Rating"
arr1_dic4["children"]=test_arr_7_8;
arr1.push(arr1_dic4);
}
if(test_arr_8_9.length!=0)
{
arr1_dic5["name"]="8-9 Rating"
arr1_dic5["children"]=test_arr_8_9;
arr1.push(arr1_dic5);
}
if(test_arr_9_10.length!=0)
{
arr1_dic6["name"]="9-10 Rating"
arr1_dic6["children"]=test_arr_9_10;
arr1.push(arr1_dic6);
}

//console.log(arr1.length);

dictionary_obj={};

dictionary_obj["name"]="flare";
dictionary_obj["children"]=arr1;
json_obj=JSON.stringify(dictionary_obj);
console.log(json_obj);
console.log(dictionary_obj);
circle(dictionary_obj);
}

function circle(dictionary_obj){

//value_radio=$('#barchart1 input[type=radio][name=gender]:checked').val()

//console.log(value_radio);


//console.log("Babu Bangaram");
/* var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<strong>Frequency:</strong> <span style='color:red'>" + d.parent + "</span>";
  });

  */
  
  $('#circlechart').empty();
  
  var div = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);


var svg = d3.select("#circlechart").append("svg").attr("width", "700")
		    .attr("height", "700");
    var margin = 20,
    diameter = +svg.attr("width"),
    g = svg.append("g").attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");




var color = d3.scaleLinear()
    .domain([-1, 5])
    .range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
    .interpolate(d3.interpolateHcl);

var pack = d3.pack()
    .size([diameter - margin, diameter - margin])
    .padding(2);



  root = d3.hierarchy(dictionary_obj)
      .sum(function(d) { return d.size; })
      .sort(function(a, b) { return b.value - a.value; });

  var focus = root,
      nodes = pack(root).descendants(),
      view;

  var circle = g.selectAll("circle")
    .data(nodes)
    .enter().append("circle")
      .attr("class", function(d) { return d.parent ? d.children ? "node" : "node node--leaf" : "node node--root"; })
      .style("fill", function(d) { return d.children ? color(d.depth) : null; })
      .on("click", function(d) { if (focus !== d) zoom(d), d3.event.stopPropagation(); })
	.on("mousemove",function(d){
		 console.log(d);
		 div.transition()
         .duration(200)
         .style("opacity", .9);
       div.html(d.data.name)
         .style("left", (d3.event.pageX) + "px")
         .style("top", (d3.event.pageY - 28) + "px");
	}) 
	.on("mouseout", function(){
		div.transition()
         .duration(500)
         .style("opacity", 0);
		
	});

  var text = g.selectAll("text")
    .data(nodes)
    .enter().append("text")
      .attr("class", "label")
      .style("fill-opacity", function(d) { return d.parent === root ? 1 : 0; })
      .style("display", function(d) { return d.parent === root ? "inline" : "none"; })
      .text(function(d) { return d.data.name; });

  var node = g.selectAll("circle,text");

  svg
      .style("background", color(-1))
      .on("click", function() { zoom(root); });

  zoomTo([root.x, root.y, root.r * 2 + margin]);

  function zoom(d) {
    var focus0 = focus; focus = d;

    var transition = d3.transition()
        .duration(d3.event.altKey ? 7500 : 750)
        .tween("zoom", function(d) {
          var i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + margin]);
          return function(t) { zoomTo(i(t)); };
        });

    transition.select("#circlechart").selectAll("text")
      .filter(function(d) { 
	  console.log(d);
	  return d.parent === focus || this.style.display === "inline";
	  })
        .style("fill-opacity", function(d) { return d.parent === focus ? 1 : 0; })
        .on("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
        .on("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });
  }

  function zoomTo(v) {
    var k = diameter / v[2]; view = v;
    node.attr("transform", function(d) { return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")"; });
    circle.attr("r", function(d) { return d.r * k; });
  }
//console.log("Babu Bangaram");
}


		  
}
}
function loadBubbleChart(final1,SelectedCountry)
	{
		if(SelectedCountry.includes("All"))
		{
			$("#BubbleTitle").text("Total Number of Movies For Each Genre for all countries");
		}
		else
		{
		$("#BubbleTitle").text("Total Number of Movies For Each Genre for "+ " " + SelectedCountry);
		}
		$("input[name='gender'][value='year_bar']").prop("checked",true);
		$("input[name='circle_parking'][value='director']").prop("checked",true);
		var_selection=SelectedCountry;
		$('#bubblechart').empty();
		$('#barchart').empty();
		document.getElementById("barchart1").style.visibility = "hidden";
		document.getElementById("circlechart1").style.visibility = "hidden";
		var diameter = 500,
	    format = d3.format(",d"),
	    color = d3.scale.category20c();

		var bubble = d3.layout.pack()
		    .sort(null)
		    .size([diameter, diameter])
		    .padding(1.5);

		var svg = d3.select("#bubbleChart").append("svg")
		    .attr("width", diameter)
		    .attr("height", diameter)
		    .attr("class", "bubble");
		    
		var tooltip = d3.select("body")
		    .append("div")
		    .style("position", "absolute")
		    .style("z-index", "10")
		    .style("visibility", "hidden")
		    .style("color", "white")
		    .style("padding", "8px")
		    .style("background-color", "rgba(0, 0, 0, 0.75)")
		    .style("border-radius", "6px")
		    .style("font", "12px sans-serif")
		    .text("tooltip");

	
		  var node = svg.selectAll(".node")
		      .data(bubble.nodes(classes({
 "name": "flare",
 "children": final1}))  
		      .filter(function(d) { return !d.children; }))   
		    	.enter().append("g")
		      .attr("class", "node")
		      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

		     // console.log(bubble.nodes(final1));

		  node.append("circle")
		      .attr("r", function(d) {return d.r; })
		      .style("fill", function(d) { return color(d.packageName); })
		      .on("mouseover", function(d) {
		              tooltip.text(d.packageName + ": " + format(d.value));
		              
		              tooltip.style("visibility", "visible");
		      })
		      .on("click",function(d) {
				//console.log(d.packageName)
				$("input[name='gender'][value='year_bar']").prop("checked",true);
				document.getElementById("circlechart1").style.visibility = "visible";
				$("input[name='circle_parking'][value='director']").prop("checked",true);
				
		      	loadCircleParking(d.packageName)
                loadBarChart(d.packageName,var_selection)


		      })
		      .on("mousemove", function() {

		          return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
		      })
		      .on("mouseout", function(){return tooltip.style("visibility", "hidden");});

		  node.append("text")
		      .attr("dy", ".3em")
		      .style("text-anchor", "middle")
		      .style("pointer-events", "none")
		      .text(function(d) { return d.packageName; });
	

		function classes(root) {
		  var classes = [];

		  function recurse(name, node) {
		    if (node.children) node.children.forEach(function(child) { recurse(node.model_body, child); });
		    else classes.push({packageName: node.genre, className: node.genre, value: node.count});
		  }

		  recurse(null, root);
		  return {children: classes};
		}


	}

//console.log("hi");

// Function for year length number of movies

function loadBarChart(genre,country)

{
	 
	
	
	$('#barchart').empty();
	document.getElementById("barchart1").style.visibility = "visible";

	
	var radios = document.getElementById("myRadio").value;
console.log(radios);
console.log(genre,country);

var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 500 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// set the ranges
var x = d3.scaleBand()
          .range([0, width])
          .padding(0.1);
var y = d3.scaleLinear()
          .range([height, 0]);
          
// append the svg object to the body of the page
// append a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("#barchart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");

/*
d3.csv("bar-data.csv", function(error, data) {

    data.forEach(function(d) {
        d.date = parseDate(d.date);
        d.value = +d.value;
    });*/
	d3.json("data.json", function(data)
	{
		
		arr=[];
		arr_duration=[];
		data.forEach(function(d)
		{
			arr.push(d.year);
			arr_duration.push(d.duration);
		});
		//console.log(arr);
		
	final_arr=uniq(arr);
	//console.log(final_arr);
	final_arr_duration=uniq(arr_duration);
	console.log(final_arr_duration);
	let forDeletion = ["II","IV","V","III","IX","VI"];

	var var_60_120=0;
	var var_120_180=0;
	var var_180_g=0;
	
	
	
//let arr = [1, 2, 3, 4, 5, 3]

final_arr = final_arr.filter(item => !forDeletion.includes(item));
// !!! Read below about array.includes(...) support !!!

// duration







console.log(final_arr);
	var var_1920_1940=0;
	var var_1940_1960=0;
	var var_1960_1980=0;
	var var_1980_2000=0;
	var var_2000_2017=0;
	
	data.forEach(function(d)
	{
		//console.log(d.genre);
		//console.log(genre);
		//console.log(d.country);
		//console.log(country);
		
		
		
		
		
		
		
		
		if((d.genre==genre && (d.country).includes(country))||(d.genre==genre && country.includes("All")))
		{
			
			
			
			if(parseInt(d.duration)>=60 && parseInt(d.duration) <= 120)
			{
				
				 var_60_120++;
				
			}
            if(parseInt(d.duration)>120 && parseInt(d.duration) <= 180)
			{
				
				var_120_180++;
				
			}			
			if(parseInt(d.duration)>180)
			{
				var_180_g++;
				
			}
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			//console.log(int(d.year));
			if(parseInt(d.year)>=1920 && parseInt(d.year)< 1940)
			{
				var_1920_1940++;
				
			}
			if(parseInt(d.year)>=1940 && parseInt(d.year)< 1960)
			{
				var_1940_1960++;
				
			}
			if(parseInt(d.year)>=1960 && parseInt(d.year)< 1980)
			{
				var_1960_1980++;
				
			}
			if(parseInt(d.year)>=1980 && parseInt(d.year)< 2000)
			{
				var_1980_2000++;
				
			}
			if(parseInt(d.year)>=2000 && parseInt(d.year)< 2017)
			{
				var_2000_2017++;
				
			}
			
			
		}
		
		
	});
	
	total_d = var_60_120 + var_120_180 + var_180_g;
	
	per_60=((var_60_120)/total_d)*100;
	per_120=((var_120_180)/total_d)*100;
	per_180=((var_180_g)/total_d)*100;
	bar_data2=[]
	
	console.log(per_60);
	console.log(per_120);
	console.log(per_180);
	
	
	var per60={};
	var per120={};
	var per180={};
	
	per60["date"]="60-120 mins";
	per60["value"]=per_60;
	per120["date"]="120-180 mins";
	per120["value"]=per_120;
	per180["date"]="greater than 180 mins";
	per180["value"]=per_180;
	bar_data2.push(per60);
	bar_data2.push(per120);
	bar_data2.push(per180);
	
	total=var_1920_1940+var_1940_1960+var_1960_1980+var_1980_2000+var_2000_2017;
	per_20=(var_1920_1940/total)*100;
	per_40=(var_1940_1960/total)*100;
	per_60=(var_1960_1980/total)*100;
	per_80=(var_1980_2000/total)*100;
	per_200=(var_2000_2017/total)*100;
	bar_data=[]
	var per20={}; 
	var per40={};
	var per60={};
	var per80={};
	var per200={};
	
	per20["date"]="1920-1940";
	per20["value"]=per_20;
	per40["date"]="1940-1960";
	per40["value"]=per_40;
	per60["date"]="1960-1980";
	per60["value"]=per_60;
	per80["date"]="1980-2000";
	per80["value"]=per_80;
	per200["date"]="2000-2017";
	per200["value"]=per_200;
	bar_data.push(per20);
	bar_data.push(per40);
	bar_data.push(per60);
	bar_data.push(per80);
	bar_data.push(per200);
	
	$("#BarTitle").text("Number of Movies According to the Year range for a particular Genre in a Country");
	
	x.domain(bar_data.map(function(d) { return d.date; }));
  y.domain([0, d3.max(bar_data, function(d) { return parseInt(d.value); })]);

  // append the rectangles for the bar chart
  svg.selectAll(".bar")
      .data(bar_data)
    .enter().append("rect")
      .attr("class", "bar")
	  .attr("fill", "teal")
      .attr("x", function(d) { return x(d.date)+10; })
      .attr("width", 50)
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); })
	  .on("click",function(d) {
				//console.log(d.date);
				//$("input[name='gender'][value='year_bar']").prop("checked",true);
				//loadCircleParking(d.packageName)
                //loadBarChart(d.packageName,var_selection)
//trend(d.date,genre,country);

		      });

  // add the x Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // add the y Axis
  svg.append("g")
      .call(d3.axisLeft(y));

	
	 svg.append("text")
        .attr("transform", "translate(" + (width / 2) + " ," + (height + margin.bottom -3) + ")")
        .style("text-anchor", "middle")
        .text("Year Range");
svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x",0 - (height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("Percentage");

	
	
	$('#barchart1 input[type=radio][name=gender]').change(function() {
	       var value = this.value;
		   
		   
		   console.log(value);
		   
	        if (value == "year_bar")
	        {
				$("#BarTitle").text("Number of Movies According to the Year range for a particular Genre in a Country");
				
				$('#barchart').empty();
				$("input[name='gender'][value='year_bar']").prop("checked",true);
				
				
				
				var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 500 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// set the ranges
var x = d3.scaleBand()
          .range([0, width])
          .padding(0.1);
var y = d3.scaleLinear()
          .range([height, 0]);
          
// append the svg object to the body of the page
// append a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("#barchart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");
				
				
	            x.domain(bar_data.map(function(d) { return d.date; }));
  y.domain([0, d3.max(bar_data, function(d) { return parseInt(d.value); })]);

  // append the rectangles for the bar chart
  svg.selectAll(".bar")
      .data(bar_data)
    .enter().append("rect")
      .attr("class", "bar")
	  .attr("fill", "teal")
      .attr("x", function(d) { return x(d.date)+10; })
      .attr("width", 50)
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); })
	  .on("click",function(d) {
				console.log(d.date);
				//$("input[name='gender'][value='year_bar']").prop("checked",true);
				//loadCircleParking(d.packageName)
                //loadBarChart(d.packageName,var_selection)


		      });

  // add the x Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // add the y Axis
  svg.append("g")
      .call(d3.axisLeft(y));

			svg.append("text")
        .attr("transform", "translate(" + (width / 2) + " ," + (height + margin.bottom -3) + ")")
        .style("text-anchor", "middle")
        .text("Year Range");
svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x",0 - (height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("Percentage");	
				
				
				
				
	        }
	        else if (value == "duration_bar")
	        {
	            
				$("#BarTitle").text("Number of Movies According to the Duration of the Movies for a particular Genre in a Country");
				
				$('#barchart').empty();
				
				
				console.log(bar_data2);
				
				var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 500 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// set the ranges
var x = d3.scaleBand()
          .range([0, width])
          .padding(0.1);
var y = d3.scaleLinear()
          .range([height, 0]);
          
// append the svg object to the body of the page
// append a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("#barchart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");
				
				
				x.domain(bar_data2.map(function(d) { return d.date; }));
  y.domain([0, d3.max(bar_data2, function(d) { return parseInt(d.value); })]);

  // append the rectangles for the bar chart
  svg.selectAll(".bar")
      .data(bar_data2)
    .enter().append("rect")
      .attr("class", "bar")
	  .attr("fill", "teal")
      .attr("x", function(d) { return x(d.date )+47; })
      .attr("width", 50)
      .attr("y", function(d) { return y(d.value); })
      .attr("height", function(d) { return height - y(d.value); })
	  .on("click",function(d) { 
				//console.log(d.date);
				//trend(d.date,genre,country);
				//$("input[name='gender'][value='year_bar']").prop("checked",true);
				//loadCircleParking(d.packageName)
                //loadBarChart(d.packageName,var_selection)


		      });

  // add the x Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // add the y Axis
  svg.append("g")
      .call(d3.axisLeft(y));

				
			svg.append("text")
        .attr("transform", "translate(" + (width / 2) + " ," + (height + margin.bottom -3) + ")")
        .style("text-anchor", "middle")
        .text("Duration");
svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x",0 - (height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("Percentage");	
				
				
				
				
	        }
			
       
    });
	
	
	
	
	
	
	
	
	
	
	
  
});
}




// code for Scatter plot
function trend(country)
{
	if(country.includes("All"))
	{
		
		$("#LinechartTitle").text("Distribution of Movies over the Years 1990-2016 for "+country+" "+ "countries" );
		
	}else{
	$("#LinechartTitle").text("Distribution of Movies over the Years 1990-2016 for "+country);
	
	}
	var colors=d3.scale.category20();
	var newData={};
	var graphData=[];
	d3.json("data.json",function(error,data){
		 $.each(data,function(i,movie)
		 {
			 if(movie["country"].includes(country) || country.includes("All"))
			 {
				 if(movie["genre"] in newData)
				 {
					 if(movie["year"] in newData[movie["genre"]])
					 {
						newData[movie["genre"]][movie["year"]] +=1;
					 }
					 else{
						newData[movie["genre"]][movie["year"]]=1;
					 }
				 }
				 else{
					 newData[movie["genre"]]={};
					 newData[movie["genre"]][movie["year"]]=1;
				 }
			 }
		 });
		 
		 var maxScale=0;
		 for(var y=1990;y<=2016;y++)
		 {
			 var yearData={"Date":y};
			 for(key in newData)
			 {
				 if(y in newData[key])
				 {
					 if (newData[key][y]>=maxScale){
						 maxScale=newData[key][y];
					 }
					 yearData[key]=newData[key][y];
				 }else{
					 yearData[key]=0;
				 }
				 
			 }
			 graphData.push(yearData);
		 }
		 
		 
		 
		 
		 // set the dimensions and margins of the graph
		 
var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom ;
	
	var legendSpace = width/21;

// parse the date / time
var parseTime = d3.timeParse("%Y");

// set the ranges
var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

 // format the data
  graphData.forEach(function(d) {
      d.Date = parseTime(d.Date);
  });
   
    // sort years ascending
  graphData.sort(function(a, b){
    return a["Date"]-b["Date"];
	})

	
	// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("#trend").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
		  
    var i=0;
	 var textPosX=0;
	  var textPosY=0;
	for(key in graphData[0])
	{
		if(key != "Date"){
			textPosX += 80;
			var mycolor=colors(i);
			 var j=0;
			 if(textPosX > width -50 || j>=1)
			 {
				 if(i==20)
				 {
					  textPosY=40;
					  mycolor="#000000";
				 }
				 else{
					 textPosY=20;
				 }
				 
				 textPosX=80;
				 j +=1;
			 }
			 
			 
			 
			// define the line
				var valueline = d3.line()
				.x(function(d) { return x(d.Date); })
				.y(function(d) { return y(d[key]); });
			 
			  // Scale the range of the data
			  x.domain(d3.extent(graphData, function(d) { return d.Date; }));
			  y.domain([0,maxScale]);
			 // y.domain([0, d3.max(graphData, function(d) {
				//  return Math.max(d.Action, d[key]); })]);
			  
			  // Add the valueline path.
			  svg.append("path")
				  .data([graphData])
				  .attr("class", "line")
				  .style("stroke",mycolor)
				  .attr("d", valueline);
			
			 
			
			
			 
			 i +=1;
			 
			 console.log(textPosX+" -- "+textPosY);
			 
			 svg.append("text")
            .attr("x", textPosX)  // space legend
            .attr("y", textPosY)
			.attr("class","legend-text")
            .attr("style","font-weight:bold")    // style the legend
            .style("fill",mycolor)
            .text(key); 
		}
		
		
	}
		  
  // Add the X Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // Add the Y Axis
  svg.append("g")
      .call(d3.axisLeft(y));
	  
	  
svg.append("text")
        .attr("transform", "translate(" + (width / 2) + " ," + (height + margin.bottom -2) + ")")
        .style("text-anchor", "middle")
        .text("Year");
		

	svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x",0 - (height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("Number of Movies");



		 
	});
}





