# TODO
- [x] Handle boolean attributes correctly (disabled, etc)
- [-] Add enums / correct types for everything to match html spec.  (Slowly being added over time.)
- [ ] Correctly space the resulting string with tabs.
- [x] ~~I might switch text only elements to taking strings directly instead of having to call `.txt()`.  (Ex: p, b)~~ Passing a string into a `h()` call will make it call `.txt()` on itself.
- [ ] Figure out how to move all the aria and svg into a sub property to keep things clean. (might not do this)
