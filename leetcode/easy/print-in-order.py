# https://leetcode.com/problems/print-in-order/

# MINE..
# class Foo:
#     def __init__(self):
#         pass


#     def first(self, printFirst: 'Callable[[], None]') -> None:

#         # printFirst() outputs "first". Do not change or remove this line.
#         printFirst()


#     def second(self, printSecond: 'Callable[[], None]') -> None:

#         # printSecond() outputs "second". Do not change or remove this line.
#         printSecond()


#     def third(self, printThird: 'Callable[[], None]') -> None:

#         # printThird() outputs "third". Do not change or remove this line.
#         printThird()

# ANSWER: lock
# https://leetcode.com/problems/print-in-order/discuss/335939/5-Python-threading-solutions-(Barrier-Lock-Event-Semaphore-Condition)-with-explanation
from threading import Lock

class Foo:
    def __init__(self):
        self.locks = (Lock(),Lock())
        self.locks[0].acquire()
        self.locks[1].acquire()

    def first(self, printFirst):
        printFirst()
        self.locks[0].release()

    def second(self, printSecond):
        with self.locks[0]:
            printSecond()
            self.locks[1].release()


    def third(self, printThird):
        with self.locks[1]:
            printThird()