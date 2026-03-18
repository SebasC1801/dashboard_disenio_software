import Image from "next/image";
import { AreaChartGradient } from "./components/AreaChartGradient";
import { BarChart } from "./components/BarChart";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <header className="bg-white rounded-full px-6 py-1.5 flex items-center justify-between shadow-sm mb-6" style={{maxWidth: '95%', marginLeft: 'auto', marginRight: 'auto'}}>
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/quixotic.png" alt="Quixotic" width={140} height={50} />
        </div>

        {/* Navigation */}
        <nav className="flex gap-1 bg-gray-100 rounded-full px-1 py-0.5">
          <a href="#" className="px-5 py-1.5 rounded-full bg-white text-black text-lg shadow-sm">Dashboard</a>
          <a href="#" className="px-5 py-1.5 rounded-full text-gray-500 hover:text-gray-900 text-lg">Reports</a>
          <a href="#" className="px-5 py-1.5 rounded-full text-gray-500 hover:text-gray-900 text-lg">Documents</a>
          <a href="#" className="px-5 py-1.5 rounded-full text-gray-500 hover:text-gray-900 text-lg">History</a>
          <a href="#" className="px-5 py-1.5 rounded-full text-gray-500 hover:text-gray-900 text-lg">Contacts</a>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-3">
          <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full">
            <Image src="/icons/search.svg" alt="Search" width={22} height={22} />
          </button>
          <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full">
            <Image src="/icons/bell.svg" alt="Notifications" width={22} height={22} />
          </button>
          <Image src="/señorheader.png" alt="User" width={44} height={44} className="rounded-full" />
          <button className="p-1">
            <Image src="/icons/down.svg" alt="Menu" width={20} height={20} />
          </button>
        </div>
      </header>

      {/* Welcome Section */}
      <div className="flex items-center justify-between mb-8 ml-32 mr-16">
        <h1 className="text-5xl font-normal text-black">
          Welcome Back, <span className="text-gray-400">Sujon</span>
        </h1>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full hover:bg-gray-50 text-black">
            <Image src="/icons/calendar.svg" alt="Calendar" width={18} height={18} />
            <span className="text-base">29 Jun, 2025 - 29 August, 2025</span>
            <Image src="/icons/down.svg" alt="Dropdown" width={14} height={14} />
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full hover:bg-gray-50 text-black">
            <span className="text-2xl">+</span>
            <span className="text-base">Add New Wallet</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex gap-6 ml-8">
        {/* Sidebar */}
        <aside className="flex flex-col gap-6">
          {/* First group with white background - 4 icons */}
          <div className="bg-white rounded-full p-4 flex flex-col gap-3">
            <button className="w-14 h-14 rounded-full flex items-center justify-center hover:opacity-90" style={{backgroundColor: '#108653'}}>
              <Image src="/icons/category.svg" alt="Category" width={20} height={20} className="invert" />
            </button>
            <button className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200">
              <Image src="/icons/wallet.svg" alt="Wallet" width={20} height={20} />
            </button>
            <button className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200">
              <Image src="/icons/credit-card.svg" alt="Credit Card" width={20} height={20} />
            </button>
            <button className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200">
              <Image src="/icons/list-check.svg" alt="List" width={20} height={20} />
            </button>
          </div>

          {/* Second group with white background - 3 icons */}
          <div className="bg-white rounded-full p-4 flex flex-col gap-3">
            <button className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200">
              <Image src="/icons/percentage.svg" alt="Percentage" width={20} height={20} />
            </button>
            <button className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200">
              <Image src="/icons/mail.svg" alt="Mail" width={20} height={20} />
            </button>
            <button className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200">
              <Image src="/icons/calendar.svg" alt="Calendar" width={20} height={20} />
            </button>
          </div>

          <div className="flex-1"></div>

          {/* Bottom group with white background */}
          <div className="bg-white rounded-full p-4 flex flex-col gap-3">
            <button className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200">
              <Image src="/icons/configuration.svg" alt="Settings" width={20} height={20} />
            </button>
            <button className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200">
              <Image src="/icons/exit_door.svg" alt="Exit" width={20} height={20} />
            </button>
          </div>
        </aside>

        {/* Content Area */}
        <div className="flex-1">
          {/* First Row */}
          <div className="flex gap-6 mb-6">
            {/* Left Column */}
            <div className="flex flex-col gap-6">
              {/* Payment Goal Card */}
              <div className="bg-white rounded-3xl p-6 w-[515px]">
                <div className="flex items-center justify-between mb-8 ml-4 mr-2">
                  <div>
                    <h3 className="text-base text-gray-700 font-bold">Payment Goal</h3>
                    <p className="text-xs text-gray-400">Total amount goal</p>
                  </div>
                  <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full">
                    <Image src="/icons/arrowcorner.svg" alt="Arrow" width={20} height={20} />
                  </button>
                </div>

                {/* VISA Card */}
                <div className="rounded-2xl p-6 relative overflow-hidden" style={{backgroundColor: '#108653'}}>
                  <div className="flex items-center justify-between mb-8">
                    <Image src="/visa.svg" alt="VISA" width={60} height={20} className="brightness-0 invert" />
                    <Image src="/icons/wifi.svg" alt="Contactless" width={28} height={28} className="brightness-0 invert" />
                  </div>
                  <div className="mb-2">
                    <p className="text-white text-xs mb-1">Credit Card</p>
                    <p className="text-white text-3xl font-semibold">$ 78,989.09</p>
                  </div>
                  <div className="flex justify-between items-end text-white text-xs">
                    <span>•••• 909090</span>
                    <span>EXP 09/26</span>
                  </div>
                </div>
              </div>

              {/* Weekly Revenue Card */}
              <div className="bg-white rounded-3xl p-6 w-[515px]">
                <div className="flex items-center justify-between px-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Weekly Revenue</p>
                    <p className="text-2xl font-bold text-black">+3,945 USD</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs text-white" style={{backgroundColor: '#108653'}}>
                    +12.8%
                  </span>
                </div>
              </div>

              {/* Payment History Card */}
              <div className="bg-white rounded-3xl p-6 w-[1240px] -mr-[725px]">
                <div className="flex items-center justify-between mb-6 ml-4 mr-2">
                  <div>
                    <h3 className="text-base text-black font-bold">Payment History</h3>
                    <p className="text-xs text-gray-400">Recent payments history</p>
                  </div>
                  <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full">
                    <Image src="/icons/arrowcorner.svg" alt="Arrow" width={20} height={20} />
                  </button>
                </div>

                {/* Table Header */}
                <div className="grid grid-cols-5 gap-4 text-xs text-gray-400 mb-4 px-4">
                  <span>Name</span>
                  <span>Date</span>
                  <span>Time</span>
                  <span>Status</span>
                  <span className="text-right">Amount</span>
                </div>

                {/* Payment Items */}
                <div className="space-y-3">
                  <div className="grid grid-cols-5 gap-4 items-center text-sm px-4 py-2 hover:bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Image src="/icons/dribbble_design.svg" alt="Dribbble" width={24} height={24} />
                      <div>
                        <p className="font-medium text-xs text-black">Dribbble Design</p>
                        <p className="text-xs text-gray-400">+18.67%</p>
                      </div>
                    </div>
                    <span className="text-xs text-black">16 Jun 2025</span>
                    <span className="text-xs text-black">10:30 PM</span>
                    <span className="text-xs text-green-600">● Successful</span>
                    <span className="text-xs text-right text-black">89,345.23 USD</span>
                  </div>

                  <div className="grid grid-cols-5 gap-4 items-center text-sm px-4 py-2 hover:bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Image src="/icons/google.svg" alt="Google" width={24} height={24} />
                      <div>
                        <p className="font-medium text-xs text-black">Google Pay</p>
                        <p className="text-xs text-gray-400">+9.34%</p>
                      </div>
                    </div>
                    <span className="text-xs text-black">15 Jun 2025</span>
                    <span className="text-xs text-black">11:45 PM</span>
                    <span className="text-xs text-green-600">● Successful</span>
                    <span className="text-xs text-right text-black">12,345.89 USD</span>
                  </div>

                  <div className="grid grid-cols-5 gap-4 items-center text-sm px-4 py-2 hover:bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Image src="/icons/amazon.svg" alt="Amazon" width={24} height={24} />
                      <div>
                        <p className="font-medium text-xs text-black">Amazon Shopping</p>
                        <p className="text-xs text-gray-400">+12.23%</p>
                      </div>
                    </div>
                    <span className="text-xs text-black">14 Jun 2025</span>
                    <span className="text-xs text-black">10:15 PM</span>
                    <span className="text-xs text-green-600">● Successful</span>
                    <span className="text-xs text-right text-black">32,123.67 USD</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Column - Engagement Rate */}
            <div className="bg-white rounded-3xl p-3 w-[715px] h-fit">
              <div className="flex items-center justify-between mb-3 ml-2 mr-1">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-100 rounded-xl">
                    <Image src="/icons/credit-card.svg" alt="Credit Card" width={18} height={18} />
                  </div>
                  <div>
                    <h3 className="text-base text-gray-700 font-bold">Engagement Rate</h3>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="px-4 py-1.5 text-sm text-gray-500 hover:text-gray-900">Monthly</button>
                  <button className="px-4 py-1.5 text-sm text-white rounded-full" style={{backgroundColor: '#108653'}}>Annually</button>
                  <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full">
                    <Image src="/icons/arrowcorner.svg" alt="Arrow" width={20} height={20} />
                  </button>
                </div>
              </div>

              {/* Chart */}
              <div className="h-[380px] relative">
                <BarChart />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6">
              {/* Payment Goal Balance Card */}
              <div className="bg-white rounded-3xl p-6 w-[475px]">
                <div className="flex items-center justify-between mb-6 ml-4 mr-2">
                  <div>
                    <h3 className="text-base text-gray-700 font-bold">Payment Goal</h3>
                    <p className="text-xs text-gray-400">Total amount goal</p>
                  </div>
                  <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full">
                    <Image src="/icons/arrowcorner.svg" alt="Arrow" width={20} height={20} />
                  </button>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2">Total Balance</p>
                  <p className="text-3xl font-bold text-black mb-1">$32,678<span className="text-gray-400">.90</span></p>
                </div>

                {/* Chart */}
                <div className="mb-4">
                  <AreaChartGradient />
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-full text-white text-sm" style={{backgroundColor: '#108653'}}>
                    Send ↑
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-full bg-gray-100 text-sm">
                    Receive ↓
                  </button>
                </div>
              </div>

              {/* Amount of Credit & Mandatory Payments Card */}
              <div className="bg-white rounded-3xl p-6 w-[475px] mt-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-gray-100 rounded-xl">
                    <Image src="/icons/credit-card.svg" alt="Credit Card" width={18} height={18} />
                  </div>
                  <div>
                    <h3 className="text-sm text-black font-bold">Amount of credit</h3>
                    <p className="text-xs text-gray-400">Total refund amount with fee</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-16">
                  <p className="text-3xl font-bold text-black">$8,945<span className="text-gray-400">.89</span></p>
                  <span className="px-3 py-1 rounded-full text-xs text-white" style={{backgroundColor: '#108653'}}>
                    +12.8%
                  </span>
                </div>

                {/* Mandatory Payments Section */}
                <div className="bg-gray-100 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-sm text-black font-bold">Mandatory Payments</h3>
                      <p className="text-xs text-gray-400">Recent payments</p>
                    </div>
                    <button className="p-2 bg-white hover:bg-gray-50 rounded-full">
                      <Image src="/icons/arrowcorner.svg" alt="Arrow" width={16} height={16} />
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    <Image src="/señor1.png" alt="User 1" width={56} height={56} className="rounded-full" />
                    <Image src="/señor2.png" alt="User 2" width={56} height={56} className="rounded-full" />
                    <Image src="/señor3.png" alt="User 3" width={56} height={56} className="rounded-full" />
                    <Image src="/señor4.png" alt="User 4" width={56} height={56} className="rounded-full" />
                    <div className="w-14 h-14 rounded-full flex items-center justify-center text-white text-sm font-semibold" style={{backgroundColor: '#108653'}}>
                      +2
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
