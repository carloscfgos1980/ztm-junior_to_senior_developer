## Chapter 02. SSH

# Lesson 1. Bruno's Request

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12599004

# Lesson 2. Introduction to SSH

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12599009

- <SSH> is a protocol. It is a way for machine to communicate with one another

- <SSH> allow users to share files as well as control and modify remote computers over the internet

- It was created as a created as secure way of communication which encrypts all data so bad actors can't monitore you

- A shell needs a certain protocol to enable data exchange or communication between two devices and not just the browser and the server (HTTPS) and that is why <SSH> is called Secured Shell Protocol

- The communication between the Host (remote computer) and the Client(the computer used to access the Host) is secured

# Lesson 3. SSH Command

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12599002

shh {user} @ {host}

# Lesson 4. Saving The Day Through SSH

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12599011

This is an exercise how to re install an app in the server in case that it is deleted by mistake

- I had a bug by creating the droplets. I already solved!

# Lesson 5. How SSH Works

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12599010

- Symmetrical encryption
- Asymmetrical encryption
- Hashing

# Lesson 6. Symmetric Encryption

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12599008

- anyone who has the key can decrypt the message that is why the "Key Exchange algorithm" so if a third party gets the kay, still cannot decrypt the message

# Lesson 7. Asymmetric Encryption

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12599013

- It uses two different keys for encryption and decryption

# Lesson 8. Hashing

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12599012

- With the hash function, any little change will spit out a complete different number

# Lesson 9. Passwords Or SSH?

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12599003

# Lesson 10. SSH Into A Server

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12599007

**big bug 1**. I could not run ssh command

- Enable ssh command
  sudo systemsetup -setremotelogin on
  sudo systemsetup -getremotelogin

-Disable ssh command
sudo systemsetup -setremotelogin off

**big bug 2**. I couldn't connect to the user (Digital Ocean). This is what I did:

1. Move "key gen" into ~/.ssh folder
2. Rename the keys as "id_rsa"
3. Edit config file:
   sudo vim /private/etc/ssh/ssh_config
4. Add this configuration:
   Host \*
   AddKeysToAgent yes
   UseKeychain yes
   IdentityFile ~/.ssh/id_rsa

It is connected!

Connect to Digital Ocean:
ssh root@164.92.213.2
pws saved somewhere

# Lesson 11. Exercise: Set Up SSH on Github

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12599001

# Lesson 12. Solution: Set Up SSH on Github

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12599006

Steps:

1. In Github go to setting in my profile
2. Click SHH and GPG keys
3. Add the ssh key
4. open ~/.ssh/id_rsa and copy the content into github
5. Try out by clone a file. go to the desire folder or create one (testing). Ex:
   git clone git@github.com:carloscfgos1980/movie-filter-Winc-assigment.gi

It worked!

# Lesson 13. Section Summary

https://academy.zerotomastery.io/courses/the-complete-junior-to-senior-web-developer-roadmap-2020/lectures/12599005
