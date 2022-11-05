Decision explanation: simplify API or have 10+ methods thus violating SOLID:
We could have exposed a fewer number of methods, by allowing for a string parameter which would represent
the targeted resource (e.g. 'book', 'chapter', 'movie') and based on the value call the appropriate
service and fetch the appropriate data.
However, it is common for SDKs to have more methods than regular internally-used services, thus we are going
for the second option.

