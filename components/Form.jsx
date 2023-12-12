import Link from "next/link"


const Form = ({ type, post, setPost, submitting, handleSubmit, handleImageChange }) => {

  const handleGoBack = () => {
    window.history.back(); // This will go back to the previous page
  };

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <div className="form-card">
        <div className="product-nav">
          <button type="button" className="close-button btn btn-danger" onClick={handleGoBack}
          >X</button>
        </div>
        <center>
        <h1 className="text-2xl" >
          <b><span className="">{type} Product</span></b>
        </h1>
        </center>

        <form
          onSubmit={handleSubmit}
          className="mt-10 w-full max-w-2xl flex flex-col gap-7 ">
          <label className="">
            <span className="font-satoshi font-semibold text-base text-gray-700">Name{` `} </span>
            <input
              value={post.name}
              onChange={(e) => setPost({ ...post, name: e.target.value })}
              placeholder="Product name"
              required
              className="form_input px-2 py-1"
            />
          </label>

          <label className="">
            <span className="font-satoshi font-semibold text-base text-gray-700">Product Description</span>
            <textarea
              value={post.description}
              onChange={(e) => setPost({ ...post, description: e.target.value })}
              placeholder="Write your product info here.."
              required
              className="form_textarea px-2 py-1"
            />
          </label>

          <label className="">
            <span className="font-satoshi font-semibold text-base text-gray-700">Price{` `} </span>
            <input
            type="Number"
              value={post.price}
              onChange={(e) => setPost({ ...post, price: e.target.value })}
              placeholder="price"
              required
              className="form_input px-2 py-1"
            />
          </label>

          <label className="">
            <span className="font-satoshi font-semibold text-base text-gray-700">Location{` `} </span>
            <input
              value={post.location}
              onChange={(e) => setPost({ ...post, location: e.target.value })}
              placeholder="Product location"
              required
              className="form_input px-2 py-1"
            />
          </label>

          <label className="flex flex-col">
            <span className="font-satoshi font-semibold text-base text-gray-700">Image{` `} </span>
            <input
              type="file"
              name="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              placeholder="image"
              required
              className="form_input px-2 py-2 w-fit"
            />
          </label>

          <div className="flex-end mx-3 mb-5 gap-4">
            <Link href='/' className="text-gray-500 text-sm">Cancel</Link>
            <button
              type="submit"
              disabled={submitting}
              className="px-5 py-1.5 text-base green1 rounded-md text-white">
              {submitting ? `${type}...` : type}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Form