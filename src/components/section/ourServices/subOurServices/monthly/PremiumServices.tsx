import { LuCheck } from "react-icons/lu";
import { TbNoteOff } from "react-icons/tb";
import { dataPremiumServicesMonthly } from "../../services";

const PremiumServices = () => {
  return (
    <>
      {dataPremiumServicesMonthly?.map((service) => (
        <div key={service.id} className="px-6 pt-6 pb-8 border-2 rounded-xl">
          <h3 className="text-2xl font-semibold text-secondary">
            {service.type}
          </h3>
          <p className="mb-6 text-xs text-secondary">{service.desc}</p>
          <h3 className="text-4xl font-semibold text-secondary">
            $ {service.price}
          </h3>
          <h5 className="mb-5 text-xs">Per Month</h5>

          <button className="w-full px-8 py-2 mb-5 text-xs border-2 rounded-md border-secondary">
            Choose this Plan
          </button>
          <table className="mb-5">
            <tbody className="flex flex-col gap-2">
              <tr>
                <td className="px-2">
                  <LuCheck />
                </td>
                <td className="text-sm text-[#808080]">{service.SSD}GB SSD</td>
              </tr>
              <tr>
                <td className="px-2">
                  <LuCheck />
                </td>
                <td className="text-sm text-[#808080]">
                  {service.BandWidth}GB Bandwith
                </td>
              </tr>
              <tr>
                <td className="px-2">
                  <LuCheck />
                </td>
                <td className="text-sm text-[#808080]">
                  {service.EmailAcounts}Email Accounts
                </td>
              </tr>
              <tr>
                <td className="px-2">
                  {service.UnlimitedDatabase ? <LuCheck /> : <TbNoteOff />}
                </td>
                <td className="text-sm text-[#808080]">Unlimited Database</td>
              </tr>
              <tr>
                <td className="px-2">
                  <LuCheck />
                </td>
                <td className="text-sm text-[#808080]">SubDomains</td>
              </tr>
              <tr>
                <td className="px-2">
                  <LuCheck />
                </td>
                <td className="text-sm text-[#808080]">
                  {service.ParkedDomain} Parked Domain
                </td>
              </tr>
              <tr>
                <td className="px-2">
                  <LuCheck />
                </td>
                <td className="text-sm text-[#808080]">
                  {service.Websites} Websites
                </td>
              </tr>
              <tr>
                <td className="px-2">
                  {service.SSL ? <LuCheck /> : <TbNoteOff />}
                </td>
                <td className="text-sm text-[#808080]">Free SSL</td>
              </tr>
              <tr>
                <td className="px-2">
                  {service.SSL ? <LuCheck /> : <TbNoteOff />}
                </td>
                <td className="text-sm text-[#808080]">Softaculous</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </>
  );
};

export default PremiumServices;
