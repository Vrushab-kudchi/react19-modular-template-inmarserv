import { FaPlus, FaShip, FaFlag, FaEdit, FaTrash } from "react-icons/fa";

// Sample data structure - will be replaced with actual data from props/state later
const sampleVessels = [
  {
    equipmentCount: 0,
    clientId: {
      _id: "6909c2fa3452de9d4f8f403d",
      name: "client",
    },
    modulesId: [
      {
        _id: "690878c1da71d1b7ab97481b",
        name: "Bridge Plus",
        description: "Bridge Plus Module",
        price: 1500,
      },
      {
        _id: "690878c1da71d1b7ab97481a",
        name: "Dry Dock",
        description: "Dry Dock Module",
        price: 1000,
      },
    ],
    name: "Chiloe Island",
    imoNumber: "9610755",
    mmsiNumber: "477752900",
    callSign: "HK-3932",
    flagState: "Hong Kong",
    vesselType: "bulk_carrier",
    grossTonnage: 33000,
    deadweight: 58000,
    length: 180,
    width: 30,
    draft: 11.8,
    yearBuilt: 2025,
    classificationSociety: "ABS",
    owner: "Pacific Basin Shipping (HK) Ltd.",
    operator: "master",
    clientName: "client",
    status: "active",
    portOfRegistry: "Hong Kong",
    homePort: "Hong Kong",
    currentLocation: "Hong Kong",
    createdBy: null,
    email: "master@chiloeisland.pacificbasin.com",
    telephone: "15053959351",
    sat_c: "477752900@inmarsat.com",
    code: "447705198",
    createdAt: "2025-11-03T10:12:31.998Z",
    updatedAt: "2025-11-13T11:11:03.114Z",
    certificateNumber: "SDN123456",
    expiryDate: "2025-11-30T00:00:00.000Z",
    id: "6908800f9a83c388c02edecd",
  },
  {
    equipmentCount: 0,
    clientId: {
      _id: "6909c2fa3452de9d4f8f403d",
      name: "client",
    },
    modulesId: [
      {
        _id: "690878c1da71d1b7ab97481b",
        name: "Bridge Plus",
        description: "Bridge Plus Module",
        price: 1500,
      },
      {
        _id: "690b2a06f62139000813883e",
        name: "inspection",
        description: "inspection Module",
        price: 2000,
      },
    ],
    name: "MV Ocean Spirit",
    imoNumber: "9876543",
    mmsiNumber: "636019872",
    callSign: "9LYZ2",
    flagState: "Liberia",
    vesselType: "cargo",
    grossTonnage: 58900,
    deadweight: 10499.99,
    length: 0,
    width: 0,
    draft: 0,
    yearBuilt: 2025,
    classificationSociety: "Lloyd's Register",
    owner: "Oceanic Marine Lines Ltd.",
    operator: "BlueWave Shipping Co.",
    clientName: "client",
    status: "active",
    portOfRegistry: "",
    homePort: "",
    currentLocation: "",
    createdBy: "[object Object]",
    email: "",
    telephone: "",
    sat_c: "",
    code: "",
    createdAt: "2025-11-03T10:39:51.972Z",
    updatedAt: "2025-11-08T11:24:29.451Z",
    id: "69088677f043a08701d9ea71",
  },
  {
    equipmentCount: 0,
    clientId: {
      _id: "6909c2fa3452de9d4f8f403d",
      name: "client",
    },
    modulesId: [],
    name: "Silver Voyager",
    imoNumber: "9732156",
    mmsiNumber: "566892340",
    callSign: "9VSP3",
    flagState: "Panama",
    vesselType: "cargo",
    grossTonnage: 0,
    deadweight: 0,
    length: 0,
    width: 0,
    draft: 0,
    yearBuilt: 2025,
    classificationSociety: "Lloyd's Register",
    owner: "SilverLine Shipping Pte Ltd.",
    operator: "",
    clientName: "client",
    status: "active",
    portOfRegistry: "",
    homePort: "",
    currentLocation: "",
    createdBy: "[object Object]",
    email: "",
    telephone: "",
    sat_c: "",
    code: "",
    createdAt: "2025-11-03T12:04:29.926Z",
    updatedAt: "2025-11-13T08:04:25.567Z",
    id: "69089a4d7c97314bd1ad42fa",
  },
  {
    equipmentCount: 0,
    clientId: {
      _id: "6909c2fa3452de9d4f8f403d",
      name: "client",
    },
    modulesId: [
      {
        _id: "690878c1da71d1b7ab97481b",
        name: "Bridge Plus",
        description: "Bridge Plus Module",
        price: 1500,
      },
    ],
    name: "Blue Horizon",
    imoNumber: "9804512",
    mmsiNumber: "249876321",
    callSign: "9HBH2",
    flagState: "Panama",
    vesselType: "cargo",
    grossTonnage: 0,
    deadweight: 0,
    length: 0,
    width: 0,
    draft: 0,
    yearBuilt: 2025,
    classificationSociety: "",
    owner: "Blue Horizon Marine Ltd.",
    operator: "",
    clientName: "client",
    status: "active",
    portOfRegistry: "",
    homePort: "",
    currentLocation: "",
    createdBy: "[object Object]",
    email: "",
    telephone: "",
    sat_c: "",
    code: "",
    createdAt: "2025-11-03T12:05:35.024Z",
    updatedAt: "2025-11-13T11:11:54.120Z",
    certificateNumber: "SDN123498",
    expiryDate: "2025-11-30T00:00:00.000Z",
    id: "69089a8f7c97314bd1ad4312",
  },
  {
    clientId: {
      _id: "6910690fe70b960a4c2fc2d2",
      name: "MSC SHIPMANAGEMENT LIMITED",
    },
    modulesId: [
      {
        _id: "690878c1da71d1b7ab97481b",
        name: "Bridge Plus",
        description: "Bridge Plus Module",
        price: 1500,
      },
    ],
    name: "MSC Elenoire",
    imoNumber: "9962603",
    mmsiNumber: "636023961",
    callSign: "5LQG9",
    flagState: "Liberia",
    vesselType: "container",
    grossTonnage: 155084,
    deadweight: 110000,
    length: 294,
    width: 32.03,
    draft: 13,
    yearBuilt: 2024,
    classificationSociety: "ABS",
    owner: "MSC SHIPMANAGEMENT LIMITED",
    operator: "MSC",
    clientName: "MSC SHIPMANAGEMENT LIMITED",
    status: "active",
    portOfRegistry: "Monrovia",
    homePort: "Limassol",
    currentLocation: "Manzanillo",
    equipmentCount: 0,
    createdBy: "[object Object]",
    email: "msc.elenoire@mscsmcy.com",
    telephone: "NA",
    sat_c: "NA",
    code: "NA",
    createdAt: "2025-11-09T11:56:23.249Z",
    updatedAt: "2025-11-13T17:02:05.976Z",
    id: "69108167e70b960a4c2fc783",
  },
  {
    clientId: {
      _id: "6909c2fa3452de9d4f8f403d",
      name: "client",
    },
    modulesId: [
      {
        _id: "690878c1da71d1b7ab97481a",
        name: "Dry Dock",
        description: "Dry Dock Module",
        price: 1000,
      },
      {
        _id: "690878c1da71d1b7ab97481b",
        name: "Bridge Plus",
        description: "Bridge Plus Module",
        price: 1500,
      },
    ],
    name: "GOLD RIVER",
    imoNumber: "9251078",
    mmsiNumber: "9251078",
    callSign: "SDH6F",
    flagState: "Cyprus",
    vesselType: "cargo",
    grossTonnage: 34800,
    deadweight: 62500,
    length: 199,
    width: 32,
    draft: 12,
    yearBuilt: 2025,
    classificationSociety: "ClassNK",
    owner: "Gold River Vessel Ltd. / Pacific Basin Shipping (HK) Ltd.",
    operator: "Pacific Basin Shipping (HK) Ltd.",
    clientName: "client",
    status: "active",
    portOfRegistry: "Limassol",
    homePort: "Larnaca",
    currentLocation: "cyprus",
    equipmentCount: 0,
    createdBy: "[object Object]",
    email: "master.goldriver@pacbasin.com",
    telephone: "KVH VSAT +1(505)2070997",
    sat_c: "456789012",
    code: "GRV‑001",
    createdAt: "2025-11-12T10:11:53.339Z",
    updatedAt: "2025-11-13T14:40:00.431Z",
    id: "69145d691ff1c8aca7ae5828",
  },
  {
    clientId: null,
    modulesId: [
      {
        _id: "690878c1da71d1b7ab97481a",
        name: "Dry Dock",
        description: "Dry Dock Module",
        price: 1000,
      },
      {
        _id: "690878c1da71d1b7ab97481b",
        name: "Bridge Plus",
        description: "Bridge Plus Module",
        price: 1500,
      },
    ],
    name: "Ultra wollongong",
    imoNumber: "9566576",
    mmsiNumber: "477716500",
    callSign: "VTZC9",
    flagState: "Hong Kong",
    vesselType: "cargo",
    grossTonnage: 33500,
    deadweight: 5800,
    length: 197,
    width: 32,
    draft: 12,
    yearBuilt: 2025,
    classificationSociety: "DNV GL",
    owner: "Pacific Basin Shipping (HK) Ltd.",
    operator: "Pacific Basin Shipping (HK) Ltd.",
    clientName: "pavan",
    status: "active",
    portOfRegistry: "Hong Kong",
    homePort: "Hong Kong",
    currentLocation: "Hong Kong",
    equipmentCount: 0,
    createdBy: "[object Object]",
    email: "master@ultrawollongong.pacificbasin.com",
    telephone: "+852 5803 5720, +88 16777 8590/8591",
    sat_c: "447710027",
    code: "UW-9566576",
    createdAt: "2025-11-12T10:18:25.627Z",
    updatedAt: "2025-11-12T10:18:25.627Z",
    id: "69145ef11ff1c8aca7ae6163",
  },
  {
    clientId: {
      _id: "6910690fe70b960a4c2fc2d2",
      name: "MSC SHIPMANAGEMENT LIMITED",
    },
    modulesId: [
      {
        _id: "690878c1da71d1b7ab97481b",
        name: "Bridge Plus",
        description: "Bridge Plus Module",
        price: 1500,
      },
    ],
    name: "MSC PALERMO",
    imoNumber: "9964223",
    mmsiNumber: "636024134",
    callSign: "5LRD9",
    flagState: "Liberia",
    vesselType: "container",
    grossTonnage: 151702,
    deadweight: 210000,
    length: 399,
    width: 61,
    draft: 16,
    yearBuilt: 2024,
    classificationSociety: "",
    owner: "MSC SHIPMANAGEMENT LIMITED",
    operator: "MSC Mediterranean Shipping Company",
    clientName: "MSC SHIPMANAGEMENT LIMITED",
    status: "active",
    portOfRegistry: "",
    homePort: "",
    currentLocation: "",
    equipmentCount: 0,
    createdBy: "[object Object]",
    email: "msc.palermo@mscvessel.com",
    telephone: "+39 010 848 9000",
    sat_c: "Inmarsat C LES: AOR‑E, Terminal ID: TBD",
    code: "MSCPAL‑9964223",
    createdAt: "2025-11-13T11:36:56.999Z",
    updatedAt: "2025-11-13T17:18:03.922Z",
    id: "6915c2d8fe3e79ff3d14cd31",
  },
  {
    clientId: {
      _id: "6910690fe70b960a4c2fc2d2",
      name: "MSC SHIPMANAGEMENT LIMITED",
    },
    modulesId: [
      {
        _id: "690878c1da71d1b7ab97481b",
        name: "Bridge Plus",
        description: "Bridge Plus Module",
        price: 1500,
      },
    ],
    name: "MSC JULIETTE",
    imoNumber: "9946893",
    mmsiNumber: "636023757",
    callSign: "5LPG5",
    flagState: "Liberia",
    vesselType: "container",
    grossTonnage: 155492,
    deadweight: 205000,
    length: 399,
    width: 61,
    draft: 16,
    yearBuilt: 2021,
    classificationSociety: "",
    owner: "MSC SHIPMANAGEMENT LIMITED",
    operator: "",
    clientName: "MSC SHIPMANAGEMENT LIMITED",
    status: "active",
    portOfRegistry: "Liberia",
    homePort: "Valencia",
    currentLocation: "North Pacific Ocean",
    equipmentCount: 0,
    createdBy: "[object Object]",
    email: "msc.juliette@mscvessel.com",
    telephone: "+1 212 555 3842",
    sat_c: "Inmarsat C LES: [AOR‑W], Terminal ID: 636023757C",
    code: "MSCJUL‑9946893",
    createdAt: "2025-11-13T11:40:03.274Z",
    updatedAt: "2025-11-13T17:12:25.560Z",
    id: "6915c393fe3e79ff3d14cd69",
  },
  {
    clientId: {
      _id: "6910690fe70b960a4c2fc2d2",
      name: "MSC SHIPMANAGEMENT LIMITED",
    },
    modulesId: [
      {
        _id: "690878c1da71d1b7ab97481a",
        name: "Dry Dock",
        description: "Dry Dock Module",
        price: 1000,
      },
    ],
    name: "MAERSK TUKANG",
    imoNumber: "9334686",
    mmsiNumber: "565825000",
    callSign: "9VHE2",
    flagState: "Singapore",
    vesselType: "container",
    grossTonnage: 12500,
    deadweight: 23000,
    length: 322,
    width: 43.2,
    draft: 13.8,
    yearBuilt: 2020,
    classificationSociety: "",
    owner: "MOLLER SINGAPORE AP PTE LTD.",
    operator: "-",
    clientName: "MSC SHIPMANAGEMENT LIMITED",
    status: "active",
    portOfRegistry: "-",
    homePort: "-",
    currentLocation: "-",
    equipmentCount: 0,
    createdBy: "[object Object]",
    email: "bridge@xn--gmdssmaersktukang-uz2jga.com",
    telephone: "+65 6123 4567",
    sat_c: "FELCOM 15 — Terminal ID: 42315; LES: Eik; Inmarsat C active",
    code: "MTK‑SG‑9334686",
    createdAt: "2025-11-14T05:38:06.671Z",
    updatedAt: "2025-11-14T05:39:17.338Z",
    id: "6916c03efe3e79ff3d1520c7",
  },
  {
    clientId: {
      _id: "6910690fe70b960a4c2fc2d2",
      name: "MSC SHIPMANAGEMENT LIMITED",
    },
    modulesId: [
      {
        _id: "690878c1da71d1b7ab97481a",
        name: "Dry Dock",
        description: "Dry Dock Module",
        price: 1000,
      },
    ],
    name: "Cap San Nicolas",
    imoNumber: "9622203",
    mmsiNumber: "219102000",
    callSign: "OXHI2",
    flagState: "Denmark",
    vesselType: "container",
    grossTonnage: 118938,
    deadweight: 120960,
    length: 333.2,
    width: 48.4,
    draft: 14.5,
    yearBuilt: 2013,
    classificationSociety: "DNV GL",
    owner: "Cap San Nicolas GmbH & Co. KG ",
    operator: "Hapag‑Lloyd AG",
    clientName: "MSC SHIPMANAGEMENT LIMITED",
    status: "active",
    portOfRegistry: "København (Copenhagen)",
    homePort: "Copenhagen",
    currentLocation: "",
    equipmentCount: 0,
    createdBy: "[object Object]",
    email: "ops@xn--capsannicolashl-dt9h.com",
    telephone: "+45 33 12 45 67",
    sat_c: "FELCOM 15 — Terminal ID: 7C42‑9622203; LES: EIK; Inmarsat‑C active",
    code: "CSN‑DK‑9622203",
    createdAt: "2025-11-14T05:44:21.035Z",
    updatedAt: "2025-11-14T05:44:21.035Z",
    id: "6916c1b5fe3e79ff3d1526a0",
  },
];

const VesselModule = () => {
  // This will be replaced with actual data from props/state later
  const vessels = sampleVessels;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatVesselType = (type: string) => {
    return type.replace("_", " ").replace(/\b\w/g, (l) => l.toUpperCase());
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-light text-white mb-2 tracking-tight">
            Vessels
          </h1>
          <p className="text-gray-500 text-sm">
            Manage and monitor your vessel fleet
          </p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium rounded-xl transition-all duration-200 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 group">
          <FaPlus className="group-hover:rotate-90 transition-transform duration-200" />
          <span>Create Vessel</span>
        </button>
      </div>

      {/* Table Container */}
      <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm">
        <div className="overflow-x-auto custom-scrollbar scroll-smooth">
          <table className="w-full min-w-[1000px]">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Vessel Name
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  IMO Number
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Flag State
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Client
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Modules
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Created
                </th>
                <th className="px-6 py-4 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {vessels.map((vessel) => (
                <tr
                  key={vessel.id}
                  className="hover:bg-white/5 transition-colors duration-150 group"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center border border-white/10">
                        <FaShip className="text-purple-400 text-sm" />
                      </div>
                      <div>
                        <div className="text-white font-medium">
                          {vessel.name}
                        </div>
                        {vessel.mmsiNumber && (
                          <div className="text-xs text-gray-500 font-mono">
                            MMSI: {vessel.mmsiNumber}
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-white font-mono text-sm">
                      {vessel.imoNumber}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <FaFlag className="text-gray-500 text-xs" />
                      <span className="text-white text-sm">
                        {vessel.flagState || "—"}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {formatVesselType(vessel.vesselType)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium ${
                        vessel.status === "active"
                          ? "bg-green-500/20 text-green-300 border border-green-500/30"
                          : "bg-gray-500/20 text-gray-300 border border-gray-500/30"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                          vessel.status === "active"
                            ? "bg-green-400"
                            : "bg-gray-400"
                        }`}
                      />
                      {vessel.status.charAt(0).toUpperCase() +
                        vessel.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-white text-sm">
                      {vessel.clientId?.name || vessel.clientName || "—"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {vessel.modulesId && vessel.modulesId.length > 0 ? (
                      <div className="flex flex-wrap gap-1">
                        {vessel.modulesId.slice(0, 2).map((module) => (
                          <span
                            key={module._id}
                            className="inline-flex items-center px-2 py-1 rounded text-xs bg-white/10 text-gray-300 border border-white/10"
                          >
                            {module.name}
                          </span>
                        ))}
                        {vessel.modulesId.length > 2 && (
                          <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-white/10 text-gray-300 border border-white/10">
                            +{vessel.modulesId.length - 2}
                          </span>
                        )}
                      </div>
                    ) : (
                      <span className="text-gray-500 text-sm">No modules</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-gray-400 text-sm">
                      {formatDate(vessel.createdAt)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        className="p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-purple-400 transition-colors"
                        title="Edit"
                      >
                        <FaEdit className="text-sm" />
                      </button>
                      <button
                        className="p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-red-400 transition-colors"
                        title="Delete"
                      >
                        <FaTrash className="text-sm" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {vessels.length === 0 && (
          <div className="text-center py-20">
            <FaShip className="mx-auto text-5xl mb-4 text-gray-700" />
            <p className="text-gray-500 mb-2">No vessels found</p>
            <p className="text-gray-600 text-sm">
              Click "Create Vessel" to add your first vessel
            </p>
          </div>
        )}
      </div>

      {/* Footer Info */}
      {vessels.length > 0 && (
        <div className="text-sm text-gray-500">
          Showing {vessels.length} {vessels.length === 1 ? "vessel" : "vessels"}
        </div>
      )}
    </div>
  );
};

export default VesselModule;
