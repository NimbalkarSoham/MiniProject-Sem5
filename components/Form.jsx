import Link from "next/link"


const Form = ({type, post, setPost, submitting, handleSubmit, handleImageChange}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="">
        <span className="">{type} Product</span>
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 ">
          <label className="">
            <span className="font-satoshi font-semibold text-base text-gray-700">Name{` `} <span className="font-normal">(#example)</span></span>
            <input 
              value={post.name}
              onChange={(e) => setPost({ ...post, name: e.target.value})}
              placeholder="Product name"
              required
              className="form_input"
            />
          </label>

          <label className="">
            <span className="font-satoshi font-semibold text-base text-gray-700">Product Description</span>
            <textarea 
              value={post.description}
              onChange={(e) => setPost({ ...post, description: e.target.value})}
              placeholder="Write your product info here.."
              required
              className="form_textarea"
            />
          </label>

          <label className="">
            <span className="font-satoshi font-semibold text-base text-gray-700">Price{` `} </span>
            <input 
              value={post.price}
              onChange={(e) => setPost({ ...post, price: e.target.value})}
              placeholder="price"
              required
              className="form_input"
            />
          </label>

          <label className="">
            <span className="font-satoshi font-semibold text-base text-gray-700">Image{` `} </span>
            <input 
              type="file" 
              name="file"
              id="image"
              accept="image/*"              
              onChange={handleImageChange}
              placeholder="image"
              required
              className="form_input"
            />
          </label>

          <div className="flex-end mx-3 mb-5 gap-4">
            <Link href='/' className="text-gray-500 text-sm">Cancel</Link>
            <button
              type="submit"
              disabled = {submitting}
              className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-black">
              {submitting ? `${type}...`: type}
            </button>
          </div>
      </form>
    </section>
  )
}

export default Form