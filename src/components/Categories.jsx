function Categories({ setCategory }) {

const categories = ["Travel","Lifestyle","Culture","Fashion"]

return(

<div className="max-w-6xl mx-auto py-12 px-4">

<h2 className="text-3xl font-bold text-center mb-8">
Categories
</h2>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center justify-items-center">

{categories.map((cat)=>(

<div
key={cat}
onClick={()=>setCategory(cat)}
className="cursor-pointer bg-gray-300 p-6 rounded-xl shadow-md
hover:shadow-xl hover:-translate-y-1
transition duration-300 w-40"
>

<h5 className="font-semibold text-lg">
{cat}
</h5>

</div>

))}

</div>

</div>

)

}

export default Categories