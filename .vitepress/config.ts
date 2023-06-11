import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "Adam Smrekar Portfolio",
    description: "Adam Smrekar Portfolio",
    srcDir: './src',
    outDir: '../public',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Engineering Projects', 
                items: [
                    { text: 'Wireless Electric Go-Kart', link: '/engineering-projects/embedded-final' }
                ]
            },
            { text: 'Game Design', 
                items: [
                    { text: 'Overwatch 5v5 Analysis', link: 'https://drive.google.com/file/d/1V00rlErEvqa8s8fX-oCYS-AmWQBWCzCz/view?usp=drive_link' }
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/adamsmrekar' },
            { icon: 'linkedin', link: 'https://www.linkedin.com/in/adam-smrekar/' },
        ],
    }
})
