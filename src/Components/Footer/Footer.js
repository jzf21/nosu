import React from 'react'

export default function Footer() {
  return (
    <>
        <footer className="bg-gray-800 text-gray-400 py-6">
        <div className="max-w-6xl mx-auto text-center">
          <p>© 2025 CyberSec. All rights reserved.</p>
          <p>
            Contact us:{" "}
            <a href="mailto:support@cybersec.com" className="text-cyan-400">
              support@cybersec.com
            </a>
          </p>
        </div>
      </footer>
    </>
  )
}
