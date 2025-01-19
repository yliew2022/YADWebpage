import { CMS_NAME } from "@/lib/constants";
import Image from 'next/image';
export function Contact() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="space-y-6">
        <div className="relative w-full h-[300px]">
          <Image 
            src="/temple.jpg"
            alt="Contact Us"
            fill
            className="rounded-lg object-cover"
            sizes="(max-width: 768px) 100vw, 600px"
            priority
          />
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-1">Our Address</h3>
              <p className="text-gray-600">
                9341 NW 57th St
                <br />
                Tamarac, FL 33351
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-1">Phone</h3>
              <p className="text-gray-600">(954) 933-0055</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-1">Email</h3>
              <p className="text-gray-600">miami@bliayad.org</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 10:00 AM - 3:00 PM
                <br />
                Saturday - Sunday: 10:00 AM - 3:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
