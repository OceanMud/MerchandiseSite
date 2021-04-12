import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

const DescriptionTabs = () => {
  const [folder, setFolder] = useState(0);
  const [selected, setSelected] = useState("");

  return (
    <div>
      <div className="md:px-28">
        <div className=" md:max-w-6xl  max-w-md mx-auto mt-10   border-b border-gray-500">
          <div className=" space-x-2  ">
            <div className=" inline-block group border-l  border-r hover:border-gray-200">
              <button
                className="p-2 bg-gray-100 border-t-4 group-hover:border-red-400 focus:outline-none  group-hover:bg-white"
                onClick={() => setFolder(0)}
              >
                Description
              </button>
            </div>

            <div className=" inline-block group border-l  border-r hover:border-gray-200">
              <button
                className="p-2 bg-gray-100 border-t-4 group-hover:border-red-400 focus:outline-none  group-hover:bg-white"
                onClick={() => setFolder(1)}
              >
                Shipping
              </button>
            </div>
          </div>
        </div>
        {folder === 0 ? (
          <div className=" text-sm pl-2 pt-10 text-gray-700 md:max-w-6xl max-w-md  mx-auto">
            <p>
              The best-selling Gildan softstyle tee is a staple every wardrobe
              should have. The shirt is made of durable cotton fabric and has a
              double-stitched neckline and sleeves. This shirt is long-lasting
              enough to become an everyday favorite!
            </p>
            <br />
            <div className="pl-6">
              <li>Sport Grey is 90% ring-spun cotton, 10% polyester</li>
              <li>Dark Heather is 65% polyester, 35% cotton</li>
              <li>Fabric weight: 4.5 oz/y² (153 g/m²)</li>
              <li>Pre-shrunk for extra durability</li>
              <li>Regular fit</li>
              <li>Tubular construction</li>
              <li>Shoulder-to-shoulder taping</li>
              <li>Quarter-turned to avoid crease down the center</li>
              <li>
                Blank product sourced from Bangladesh, Honduras, Haiti, Mexico,
                or Nicaragua
              </li>
            </div>
            <br />
            <p>
              Disclaimer: Gildan now offers a separate label disclosing this
              product's country of origin. It used to be located on the neck
              label, but now it's sewn on the inside of the shoulder seam. You
              might receive t-shirts with either label placement until we sell
              out of the previous version.
            </p>
            <br />
            <p>This product is made on demand.</p>
            <br />
            <h1 className=" text-black text-xl font-bold">
              Print care instructions
            </h1>
            <br />
            <p>
              Follow our
              <a href="#" className=" px-1 text-UrlBlue">
                care instructions
              </a>
              to look after your custom printed products.
            </p>
          </div>
        ) : (
          <div className=" md:max-w-none max-w-md mx-auto  ">
            <div className="pt-10   grid grid-cols-3 md:block flex-col md:max-w-6xl mx-auto  ">
              <div className=" col-span-3 md:pb-4 font-bold border-b border-gray-200 md:flex md:flex-row   space-y-4 flex-col md:space-y-0 ">
                <h3 className="md:w-5/12 ">Country</h3>
                <ReactFlagsSelect
                  selected={selected}
                  onSelect={(code) => setSelected(code)}
                  className=" md:hidden    "
                />
                <h3 className="  md:w-3/12">Delivery time</h3>
                <h3 className="md:w-2/12">First item</h3>
                <h3 className=" ">Next item</h3>
              </div>

              <div className="md:pt-5 md:pb-4 md:border-b md:border-gray-200 items-center col-start-3 col  md:flex  text-sm text-gray-600 md:space-y-0 space-y-4 md:mt-0 -mt-28  ">
                <div className="hidden md:block md:w-5/12  ">
                  <ReactFlagsSelect
                    selected={selected}
                    onSelect={(code) => setSelected(code)}
                    className=" lg:max-w-xs lg:w-auto md:w-44  "
                  />
                </div>

                <p className="md:w-3/12 md:mr-4 md:mt-0 ">9-12 business days</p>
                <p className="md:w-2/12">$3.99</p>
                <p>$1.25</p>
              </div>
              <p className="col-span-3 pt-8">
                * Delivery times are estimated and might differ based on the
                amount of orders to proceed. You will see the final costs and
                delivery times in the order Checkout.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DescriptionTabs;
