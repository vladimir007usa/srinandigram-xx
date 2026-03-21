import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VillasPage from "./pages/VillasPage";
import ApartmentsPage from "./pages/ApartmentsPage";
import MapPage from "./pages/MapPage";
import VideoSection from "./components/VideoSection";
const GallerySection = lazy(() => import("./pages/GallerySection"));
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/gallery" element={
            <Suspense fallback={<div className="flex h-screen items-center justify-center text-brown-dark font-heading">Loading...</div>}>
              <GallerySection />
            </Suspense>
          } />
          <Route path="/properties/villas" element={<VillasPage />} />
          <Route path="/properties/apartments" element={<ApartmentsPage />} />
          <Route path="/properties/map" element={<MapPage />} />
          <Route path="/video" element={<VideoSection />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
