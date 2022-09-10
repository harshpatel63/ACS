package com.example.acs

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.example.acs.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        val view = binding.root
        setContentView(view)
        val url = "https://harshpatel63.github.io/Decentralized-Rating-System/"
        val i = Intent(Intent.ACTION_VIEW)
        i.setPackage("io.metamask")
        i.data = Uri.parse(url)
        startActivity(i)
    }
}