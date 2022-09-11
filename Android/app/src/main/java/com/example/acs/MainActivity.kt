package com.example.acs

import android.content.Intent
import android.content.pm.PackageManager
import android.net.Uri
import android.os.Bundle
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.example.acs.databinding.ActivityMainBinding


class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        val view = binding.root
        setContentView(view)
        if(isAppInstalled("io.metamask")) {
            val url = "https://recondite-astonishing-radius.glitch.me/"
            val i = Intent(Intent.ACTION_VIEW)
            i.setPackage("io.metamask")
            i.data = Uri.parse(url)
            startActivity(i)
        } else {
            Toast.makeText(this, "Please install metamask to continue...", Toast.LENGTH_LONG).show()
        }
    }
    private fun isAppInstalled(packageName: String): Boolean {
        return try {
            packageManager.getPackageInfo(packageName, PackageManager.GET_ACTIVITIES)
            true
        } catch (ignored: PackageManager.NameNotFoundException) {
            false
        }
    }
}