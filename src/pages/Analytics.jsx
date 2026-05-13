import React from "react";
import { Link } from "react-router-dom";

function Analytics() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-10 h-20 bg-white shadow-md">

        {/* LOGO */}
        <div className="flex items-center">
          <img src="/LOGO.png" alt="PennyWise Logo" className="h-10 w-auto" />
        </div>

        {/* LINKS */}
        <ul className="flex gap-8 text-sm text-gray-500">
          <li><Link className="hover:text-blue-600" to="/dashboard">Dashboard</Link></li>
          <li><Link className="hover:text-blue-600" to="/transactions">Transactions</Link></li>
          <li><Link className="hover:text-blue-600" to="/budget">Budget</Link></li>
          <li><Link className="hover:text-blue-600" to="/goals">Goals</Link></li>

          <li className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1">
            <Link to="/analytics">Analytics</Link>
          </li>
        </ul>

        {/* PROFILE */}
        <Link to="/profile">
          <span className="text-2xl text-gray-500 cursor-pointer hover:text-blue-600">
            account_circle
          </span>
        </Link>
      </nav>

      {/* MAIN */}
      <main className="max-w-6xl mx-auto px-6 mt-10 mb-16">

        <h2 className="text-2xl font-semibold mb-6">Analytics</h2>

        {/* FILTERS */}
        <div className="flex gap-4 mb-6 flex-wrap">
          <select className="w-48 h-10 border rounded-md px-3 text-gray-500">
            <option>Time Period</option>
          </select>

          <select className="w-48 h-10 border rounded-md px-3 text-gray-500">
            <option>All Categories</option>
          </select>
        </div>

        {/* HEADER */}
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-lg font-medium">Financial Overview</h3>

          <button className="border px-3 py-2 rounded-md text-gray-500 hover:bg-gray-100">
            This Month ▼
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* LINE CHART CARD */}
          <div className="bg-white p-6 rounded-lg shadow">

            <div className="flex justify-between items-center">
              <h4 className="font-semibold">Income vs Expense</h4>
              <span className="text-xs text-gray-400">Monthly trend</span>
            </div>

            {/* CHART */}
            <div className="mt-6">

              <div className="h-48 bg-[repeating-linear-gradient(to_bottom,transparent,transparent_38px,#e5e7eb_39px)] relative">

                <svg viewBox="0 0 420 220" className="w-full h-full absolute top-0 left-0">
                  <polyline
                    points="30,145 95,105 160,135 225,95 300,80 385,35"
                    fill="none"
                    stroke="#14b8a6"
                    strokeWidth="4"
                  />
                  <polyline
                    points="30,175 100,160 170,145 240,132 315,122 385,112"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="4"
                  />
                </svg>
              </div>

              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>Jan</span><span>Feb</span><span>Mar</span>
                <span>Apr</span><span>May</span><span>Jun</span>
              </div>

              <div className="flex justify-center gap-8 text-xs mt-3">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                  Income
                </span>

                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  Expense
                </span>
              </div>

            </div>
          </div>

          {/* BAR CHART CARD */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-semibold mb-4">Spending by Category</h4>

            <div className="flex items-end justify-between h-56 border-b">

              <div className="flex flex-col items-center text-xs text-gray-500">
                <div className="w-10 bg-yellow-400" style={{ height: "160px" }}></div>
                <span>Food</span>
              </div>

              <div className="flex flex-col items-center text-xs text-gray-500">
                <div className="w-10 bg-blue-500" style={{ height: "100px" }}></div>
                <span>Transport</span>
              </div>

              <div className="flex flex-col items-center text-xs text-gray-500">
                <div className="w-10 bg-red-500" style={{ height: "75px" }}></div>
                <span>Entertain</span>
              </div>

              <div className="flex flex-col items-center text-xs text-gray-500">
                <div className="w-10 bg-green-500" style={{ height: "125px" }}></div>
                <span>Shopping</span>
              </div>

              <div className="flex flex-col items-center text-xs text-gray-500">
                <div className="w-10 bg-purple-500" style={{ height: "140px" }}></div>
                <span>Bills</span>
              </div>

            </div>
          </div>

          {/* PIE CHART CARD */}
          <div className="bg-white p-6 rounded-lg shadow">

            <h4 className="font-semibold mb-4">Top 5 Expenses</h4>

            <div className="flex items-center gap-10">

              {/* PIE */}
              <div className="w-44 h-44 rounded-full"
                style={{
                  background: "conic-gradient(#facc15 0 31%, #3b82f6 31% 56%, #22c55e 56% 75%, #ef4444 75% 90%, #8b5cf6 90% 100%)"
                }}
              />

              {/* LEGEND */}
              <div className="flex flex-col gap-2 text-sm">

                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  Rent
                </span>

                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Groceries
                </span>

                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Utilities
                </span>

                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  Entertainment
                </span>

                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Transport
                </span>

              </div>

            </div>
          </div>

        </div>

      </main>

      {/* FOOTER */}
      <footer className="text-center py-6 border-t bg-white text-sm text-gray-500">
        © 2026 PennyWise. All rights reserved.
      </footer>

    </div>
  );
}

export default Analytics;